import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';

export const POST: APIRoute = async ({ request }) => {
  const GEMINI_API_KEY = "AIzaSyCqjFQlOp6RJrrZYZCHUo983cevWp0FAwU";
  if (!GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'API key not configured' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let destination = 'Tokio, Japón';
  try {
    const data = await request.json();
    if (data?.destination) {
      destination = data.destination;
    }
  } catch {}

  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const prompt = `Fotografía realista de ${destination}, destino turístico, alta calidad, colores vivos.`;

  try {
    const response = await ai.models.generateImages({
      model: 'imagen-3.0-generate-002',
      prompt,
      config: {
        numberOfImages: 1,
      },
    });
    console.log('RESPONSE FROM GEMINI IMAGEN:', JSON.stringify(response, null, 2));

    if (
      response.generatedImages &&
      response.generatedImages.length > 0 &&
      response.generatedImages[0].image?.imageBytes
    ) {
      const imgBytes = response.generatedImages[0].image.imageBytes;
      const mimeType = response.generatedImages[0].image.mimeType || 'image/png';
      const imageDataUrl = `data:${mimeType};base64,${imgBytes}`;
      return new Response(
        JSON.stringify({ image: imageDataUrl }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      console.error('No se generó imagen. Respuesta:', JSON.stringify(response, null, 2));
      return new Response(
        JSON.stringify({ error: 'No se generó imagen.', response }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error generando la imagen:', error);
    return new Response(
      JSON.stringify({ error: 'Error generando la imagen', details: String(error) }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}; 