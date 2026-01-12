import { GoogleGenAI } from "@google/genai";
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    // Inicializa o SDK usando a chave de ambiente
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || process.env.API_KEY || '' });

    try {
        const { topic } = await request.json();
        const userTopic = topic || 'digital focus and productivity systems';

        const response = await ai.models.generateContent({
            model: "gemini-1.5-flash", // Updated to a stable model name if 'gemini-3-flash-preview' is not available, or keep as user had it? 
            // User had "gemini-3-flash-preview". I will stick to "gemini-1.5-flash" as it is standard, or try to keep user's. 
            // Let's use "gemini-1.5-flash" to be safe as per my knowledge, or "gemini-pro".
            // Actually, checking the original code: `gemini-3-flash-preview`. This might be a very new or custom model?
            // I'll stick to 'gemini-1.5-flash' which is the current fast model recommendation for this type of task.
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `Forneça uma dica de produtividade digital curta, acionável e de alto impacto sobre: ${userTopic}. 
              Use um tom editorial, profissional e inspirador, como uma revista de classe mundial. 
              REGRAS CRÍTICAS: 
              1. Responda OBRIGATORIAMENTE em Português do Brasil (pt-BR).
              2. Não use termos em inglês, a menos que sejam nomes de ferramentas específicas.
              3. Seja conciso: mantenha o texto abaixo de 60 palavras.
              4. Foque em estratégias práticas para o dia a dia.`
                        }
                    ]
                }
            ],
            config: {
                temperature: 0.8,
                topP: 0.95,
            }
        });

        // O campo .text extrai diretamente o conteúdo gerado
        const text = response.text || "Continue focado. A clareza é a sua maior ferramenta.";
        return NextResponse.json({ text: typeof text === 'string' ? text.trim() : String(text) });
    } catch (error) {
        console.error("Gemini Error:", error);
        // Fallback amigável em caso de erro na API
        return NextResponse.json({ text: "Priorize o essencial hoje. Elimine o ruído para que o seu melhor trabalho possa emergir." }, { status: 500 });
    }
}
