// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
  } from '@google/genai';
  
  async function main(prompt) {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_APP_ID,
    });
    const tools = [
      {
        googleSearch: {
        }
      },
    ];
    const config = {
      thinkingConfig: {
        thinkingBudget: -1,
      },
      tools,
      responseMimeType: 'text/plain',
    };
    const model = 'gemini-2.5-pro';
    const contents = [
      {
        role: 'user',
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];
  
    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });
    let fileIndex = 0;
    let fullText = ''; // Initialize an empty string to accumulate chunks
    for await (const chunk of response) {
      fullText += chunk.text;
      console.log(fullText);
    }
    return fullText;
    
  }
  
  export default main;
  
