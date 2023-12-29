import { Module } from '@nestjs/common';
import { GptService } from './services/gpt/gpt.service';
import { GptController } from './controller/gpt/gpt.controller';

@Module({
  imports: [],
  controllers: [GptController],
  providers: [GptService],
})
export class GptModule {}
