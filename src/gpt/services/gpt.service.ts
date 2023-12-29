import { Injectable } from '@nestjs/common';
import { OrthographyCheck } from '../use-case/orthography-check.use-case';
import OpenAI from 'openai';

const OPENAI_KEY = process.env.OPENAI_API_KEY;

@Injectable()
export class GptService {
  private openai = new OpenAI({ apiKey: OPENAI_KEY });

  async orthographyCheck(prompt: string) {
    return await OrthographyCheck(this.openai, { prompt });
  }
}
