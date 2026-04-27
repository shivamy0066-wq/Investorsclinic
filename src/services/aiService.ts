import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generatePropertyImages(description: string, count: number = 3): Promise<string[]> {
  try {
    const images: string[] = [];
    
    // We'll generate multiple images one by one for better variety
    // or we can try to ask for multiple in one go if the model supports it well.
    // The skill says "High-Quality Image Generation and Editing Tasks (supports 512px, 1K, 2K, and 4K resolution): 'gemini-3.1-flash-image-preview'"
    
    for (let i = 0; i < count; i++) {
        const prompt = `Generate a high-quality, realistic, architectural 3D render of a luxury luxury residential property based on this description: ${description}. 
        Style: Photorealistic, cinematic lighting, 8k resolution, elegant, modern architectural photography. 
        Variation: ${i + 1} of ${count}. Focus on different angles like exterior facade, luxury living room, or pool area.`;

        const response = await ai.models.generateContent({
            model: 'gemini-3.1-flash-image-preview',
            contents: {
                parts: [
                    { text: prompt },
                ],
            },
            config: {
                imageConfig: {
                    aspectRatio: "16:9",
                    imageSize: "1K"
                },
            },
        });

        if (response.candidates && response.candidates[0].content.parts) {
            for (const part of response.candidates[0].content.parts) {
                if (part.inlineData) {
                    const base64EncodeString = part.inlineData.data;
                    images.push(`data:image/png;base64,${base64EncodeString}`);
                }
            }
        }
    }

    return images;
  } catch (error) {
    console.error("Error generating images:", error);
    return [];
  }
}
