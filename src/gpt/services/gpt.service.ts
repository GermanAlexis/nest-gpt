import { Injectable } from '@nestjs/common';
import { OrthographyCheck } from '../use-case/orthography-check.use-case';
import OpenAI from 'openai';
import { OrthographyDto } from '../dtos/orthographyDto';

const OPENAI_KEY = process.env.OPENAI_API_KEY;

@Injectable()
export class GptService {
  private openai = new OpenAI({ apiKey: OPENAI_KEY });

  async orthographyCheck(orthographyDto: OrthographyDto) {
    const { prompt } = orthographyDto;
    return await OrthographyCheck(this.openai, { prompt });
  }
}
