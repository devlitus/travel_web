import type { APIRoute } from 'astro';
import {GoogleGenAI} from '@google/genai';
import { transformMarkdownToJson } from '../../utils/transformMarkdownToJson';

export const POST: APIRoute = async ({ request }) => {
  const GEMINI_API_KEY = "AIzaSyCqjFQlOp6RJrrZYZCHUo983cevWp0FAwU";
  console.log('request:', request);
  if (!GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    const data = await request.json();
    const query = data.query;
    
    if (!query) {
      return new Response(
        JSON.stringify({ error: 'Query parameter is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    const ai = new GoogleGenAI({
      apiKey: GEMINI_API_KEY
    });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: query,
      config: {        systemInstruction: `Eres un experto en turismo. Responde SOLO con JSON válido, sin texto adicional, sin explicaciones, sin bloques de código markdown.

                Proporciona 5 destinos turísticos populares relacionados con "${query}". 
                
                IMPORTANTE: Tu respuesta debe ser ÚNICAMENTE el JSON válido que se muestra a continuación:

                {
                  "destinations": [
                    {
                      "name": "Nombre del destino",
                      "country": "País", 
                      "description": "Descripción breve del destino",
                      "special_feature": "Lo que lo hace único",
                      "image": "URL de la imagen del destino"
                    }
                  ]
                }

                NO agregues texto antes o después del JSON. NO uses bloques de código markdown.`,        
        maxOutputTokens: 1000,
        temperature: 0.1,
        candidateCount: 1,

      }    });
    
    const text = response.text;
    console.log('Respuesta raw de Gemini:', text);
    
    if (!text) {
      return new Response(
        JSON.stringify({ error: 'No se recibió respuesta válida de Gemini' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Limpiar cualquier texto no deseado de la respuesta
    let cleanedText = text.trim();
    
    try {
      // Intentar parsear el JSON
      const parsedData = transformMarkdownToJson(cleanedText);   
      return new Response(
        JSON.stringify(parsedData),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (parseError) {
      console.error('Error parseando JSON:', parseError);
      console.error('Texto que se intentó parsear:', cleanedText);
      
      return new Response(
        JSON.stringify({ 
          error: 'Error procesando respuesta de IA',
          rawResponse: text,
          cleanedResponse: cleanedText 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error en la API de búsqueda:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
