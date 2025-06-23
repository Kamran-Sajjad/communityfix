// import express from 'express';
// import { OpenAI } from 'openai';
// import dotenv from 'dotenv';

// dotenv.config();
// const router = express.Router();

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY
// });

// router.post('/concise', async (req, res) => {
//   try {
//     const { text } = req.body;
    
//     if (!text || typeof text !== 'string') {
//       return res.status(400).json({ error: 'Text is required' });
//     }

//     const completion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant that summarizes text concisely while preserving key information."
//         },
//         {
//           role: "user",
//           content: `Summarize this text in about 30-50% of its original length while keeping all important details:\n\n${text}`
//         }
//       ],
//       temperature: 0.3,
//       max_tokens: 1000
//     });

//     const summary = completion.choices[0].message.content;
//     res.json({ summary });
//   } catch (error) {
//     console.error('OpenAI Error:', error);
//     res.status(500).json({ error: 'Failed to generate concise version' });
//   }
// });

// export default router;

import express from 'express';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/concise', async (req, res) => {
  try {
    console.log("Received concise request");
    
    const { text } = req.body;
    
    // Input validation
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ 
        error: 'Text is required and must be a string' 
      });
    }

    if (text.length > 5000) {
      return res.status(400).json({
        error: 'Text too long (max 5000 characters)'
      });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Provide a concise summary (30-50% of original length) preserving all key information."
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.3,
      max_tokens: 1000
    });

    const summary = completion.choices[0]?.message?.content;
    
    if (!summary) {
      throw new Error("No summary returned from API");
    }

    return res.json({ 
      success: true,
      summary 
    });

  } catch (error) {
    console.error("Error in /concise endpoint:", error);
    
    // Fallback to local summarization
    const localSummary = summarizeLocally(req.body.text);
    
    return res.json({
      success: false,
      summary: localSummary,
      message: "Used basic concise method (AI service unavailable)"
    });
  }
});

// Local fallback summarization
function summarizeLocally(text) {
  if (!text) return "";
  
  const sentences = text.split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (sentences.length <= 3) return text;

  const importantSentences = [
    sentences[0],
    sentences[Math.floor(sentences.length/2)],
    sentences[sentences.length-1]
  ].filter(Boolean);

  return importantSentences.join('. ') + (text.endsWith('.') ? '' : '.');
}

export default router;