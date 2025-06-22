import type { APIRoute } from 'astro';
import {GoogleGenAI} from '@google/genai';
import { transformMarkdownToJson } from '../../utils/transformMarkdownToJson';
import { z } from 'zod';

const travelSchema = z.object({
  destination: z.string().min(1, "El destino es requerido"),
  budget: z.enum(["low", "medium", "high"]),
  duration: z.enum(["weekend", "1-week", "2-weeks", "month"]),
  travelStyle: z.enum(["backpacking", "luxury", "family", "adventure"]),
  accommodation: z.enum(["hotel", "hostel", "apartment", "resort"]),
  season: z.enum(["summer", "winter", "spring", "autumn"]),
  activities: z.array(z.string()).min(1, "Selecciona al menos una actividad"),
});

export const POST: APIRoute = async ({ request }) => {
  const GEMINI_API_KEY = "AIzaSyCqjFQlOp6RJrrZYZCHUo983cevWp0FAwU";
  if (!GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
  
  try {
    const data = await request.json();
    const { destination, budget, duration, travelStyle, accommodation, season, activities } = travelSchema.parse(data);
    const query = `
     Busca ${destination} en ${budget} ${duration} ${travelStyle} ${accommodation} ${season} ${activities}
    `
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
      config: {        
        systemInstruction: `Eres un experto planificador de viajes. Tu tarea es crear un itinerario de viaje detallado basado en las preferencias del usuario. Responde SOLO con un JSON válido, sin texto adicional, sin explicaciones y sin bloques de código markdown.

                Las preferencias del usuario son: "${query}".

                Basado en estas preferencias, crea un itinerario. La duración debe ser consistente con la preferencia del usuario (fin de semana = 2-3 días, 1 semana = 7 días, 2 semanas = 14 días, 1 mes = 30 días).

                IMPORTANTE: Tu respuesta debe ser ÚNICAMENTE el JSON válido con la siguiente estructura:
                
                {
                  "itinerary": {
                    "destination_name": "Nombre del destino principal",
                    "country": "País",
                    "duration_days": "Número de días del viaje",
                    "suggested_accommodation": {
                      "type": "Tipo de Alojamiento (Hotel, Hostel, etc.)",
                      "name": "Nombre de un Alojamiento Sugerido",
                      "estimated_cost_range": "Rango de costo (ej. $100-$150 por noche)"
                    },
                    "daily_plan": [
                      {
                        "day": 1,
                        "title": "Título para el día (ej. Llegada y primer contacto)",
                        "activities": [
                          {
                            "time_of_day": "Mañana",
                            "description": "Descripción detallada de la actividad."
                          },
                          {
                            "time_of_day": "Tarde",
                            "description": "Descripción detallada de la actividad."
                          },
                          {
                            "time_of_day": "Noche",
                            "description": "Descripción detallada de la actividad."
                          }
                        ]
                      }
                    ],
                    "budget_overview": {
                      "accommodation": "Estimación de costo de alojamiento para el viaje completo",
                      "food": "Estimación de costo de comida para el viaje completo",
                      "activities": "Estimación de costo de actividades para el viaje completo",
                      "transportation": "Estimación de costo de transporte local para el viaje completo",
                      "total_estimated_cost": "Costo total estimado del viaje"
                    },
                    "travel_tips": [
                      "Consejo de viaje útil y específico para el destino.",
                      "Otro consejo práctico."
                    ]
                  }
                }
                
                NO agregues texto antes o después del JSON. NO uses bloques de código markdown.`,        
        // maxOutputTokens: 2048,
        temperature: 0.1,
        candidateCount: 1,

      }    });
    
    const text = response.text;
        
    if (!text) {
      return new Response(
        JSON.stringify({ error: 'No se recibió respuesta válida de Gemini' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Limpiar cualquier texto no deseado de la respuesta
    let cleanedText = text.trim();

    // Elimina cualquier bloque de código markdown al inicio y final
    cleanedText = cleanedText.replace(/^```[a-zA-Z]*\n?/, '').replace(/```\s*$/, '').trim();
    
    try {
      // Intentar parsear el JSON
      const parsedData = transformMarkdownToJson(cleanedText);
      const itinerary = parsedData.itinerary;

      if (!itinerary) {
        throw new Error("El itinerario no se encontró en la respuesta de la IA.");
      }

      // Función para generar imagen con Gemini
      async function generateImage(prompt: string, ai: any): Promise<string> {
        const response = await ai.models.generateContent({
          model: 'image-3.0-generate-002',
          contents: prompt,
          config: {
            maxOutputTokens: 1024,
            temperature: 0.3,
            candidateCount: 1,
          }
        });
        // Ajusta esto según la respuesta real de Gemini
        if (response.imageUrl) return response.imageUrl;
        if (response.candidates?.[0]?.content?.parts?.[0]?.fileData?.mimeType?.startsWith('image/')) {
          return `data:${response.candidates[0].content.parts[0].fileData.mimeType};base64,${response.candidates[0].content.parts[0].fileData.data}`;
        }
        return '';
      }

      // Generar imagen para el destino y añadirla al objeto del itinerario
      const prompt = `Fotografía realista de ${itinerary.destination_name}, ${itinerary.country}, destino turístico, alta calidad, colores vivos.`;
      try {
        itinerary.image = await generateImage(prompt, ai);
        console.log('itinerary.image', itinerary.image);
      } catch (e) {
        itinerary.image = '';
      }

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
