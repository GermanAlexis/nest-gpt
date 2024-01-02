import OpenAI from 'openai';
import { orthoGraphyEnum } from '../enums/orthography.enums';

interface Options {
  prompt: string;
}

export const OrthographyCheck = async (openai: OpenAI, opts: Options) => {
  const { prompt } = opts;

  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: orthoGraphyEnum.contentSystem }],
    model: 'gpt-3.5-turbo',
  });
  console.log('completion: ', completion);
  console.log('completion: ', completion.choices[0]);

  return { prompt, apiKey: process.env.OPENAI_API_KEY };
};
