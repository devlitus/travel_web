export function transformMarkdownToJson(input: string): any {
// Remover bloques de código markdown si existen
    if (input.includes('```json')) {
      const jsonMatch = input.match(/```json\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        input = jsonMatch[1].trim();
      }
    } else if (input.includes('```')) {
      const jsonMatch = input.match(/```\s*([\s\S]*?)\s*```/);
      if (jsonMatch && jsonMatch[1]) {
        input = jsonMatch[1].trim();
      }
    }
    
    // Buscar el inicio del JSON válido
    const jsonStart = input.indexOf('{');
    if (jsonStart > 0) {
      input = input.substring(jsonStart);
    }
    
    // Buscar el final del JSON válido
    const jsonEnd = input.lastIndexOf('}');
    if (jsonEnd > 0 && jsonEnd < input.length - 1) {
      input = input.substring(0, jsonEnd + 1);
    }
  const json = JSON.parse(input);    
  return json;
}
