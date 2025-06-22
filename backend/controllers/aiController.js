import BERTModel from '../utils/bertModel.js';

export const getBERTResponse = async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Check if the message contains a [MASK] token
    const hasMask = message.includes('[MASK]');
    
    if (!hasMask) {
      // For general chat, we'll use a different approach
      const responses = {
        greeting: ["Hello! How can I assist you today?", "Hi there! What can I help you with?"],
        help: ["I can help with reporting issues, checking statuses, and answering questions.", 
               "You can ask me about community issues, feedback, or general inquiries."],
        default: ["I'm not sure how to help with that. Could you rephrase?", 
                 "I'm still learning. Could you ask in a different way?"]
      };

      // Simple intent detection
      const lowerMsg = message.toLowerCase();
      let response;
      
      if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
        response = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
      } else if (lowerMsg.includes('help') || lowerMsg.includes('support')) {
        response = responses.help[Math.floor(Math.random() * responses.help.length)];
      } else {
        response = responses.default[Math.floor(Math.random() * responses.default.length)];
      }

      return res.json({ response });
    }

    // Process with BERT if there's a [MASK] token
    const results = await BERTModel.predict(message);
    const topResponse = results[0].sequence.replace('[CLS]', '').replace('[SEP]', '').trim();
    
    res.json({ response: topResponse });
  } catch (error) {
    console.error('Error in getBERTResponse:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
};