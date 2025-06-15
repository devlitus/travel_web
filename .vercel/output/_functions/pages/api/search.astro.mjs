import { GoogleGenAI } from '@google/genai';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  console.log("request:", request);
  if (!GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "API key not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const data = await request.json();
    const query = data.query;
    if (!query) {
      return new Response(
        JSON.stringify({ error: "Query parameter is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const ai = new GoogleGenAI({
      apiKey: GEMINI_API_KEY
    });
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: {
        text: `Como experto en turismo, proporciona 5 destinos turísticos populares relacionados con "${query}". 
        Para cada destino incluye:
        1. Nombre del destino
        2. País
        3. Una breve descripción (máximo 2 líneas)
        4. Una característica especial que lo hace único
        
        Responde en formato JSON con esta estructura:
        {
          "destinos": [
            {
              "nombre": "Nombre del destino",
              "pais": "País",
              "descripcion": "Descripción breve",
              "caracteristica_especial": "Lo que lo hace único"
            }
          ]
        }`
      }
    });
    console.log("Respuesta de Gemini:", response);
    const text = response.text;
    return new Response(
      JSON.stringify({ data: text }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error en la API de búsqueda:", error);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
