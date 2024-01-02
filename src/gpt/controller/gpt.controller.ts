import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from 'src/gpt/services/gpt.service';
import { OrthographyDto } from '../dtos/orthographyDto';

@Controller('gpt')
export class GptController {
  constructor(private gptService: GptService) {}

  @Post('orthography-check')
  async orthographyCheck(@Body() orthographyDto: OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto);
  }
}
