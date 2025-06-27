import { pipeline } from '@xenova/transformers';

class BERTModel {
  static instance = null;

  static async getInstance() {
    if (!this.instance) {
      this.instance = await pipeline('fill-mask', 'Xenova/bert-base-uncased');
    }
    return this.instance;
  }

  static async predict(maskedText) {
    try {
      const unmasker = await this.getInstance();
      const results = await unmasker(maskedText);
      return results;
    } catch (error) {
      console.error('BERT prediction error:', error);
      throw error;
    }
  }
}

export default BERTModel;