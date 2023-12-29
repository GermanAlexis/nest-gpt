import { Controller, Post } from '@nestjs/common';
import { GptService } from 'src/gpt/services/gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private gptService: GptService) {}

  @Post('orthography-check')
  async orthographyCheck() {
    return this.gptService.orthographyCheck('check');
  }
}
