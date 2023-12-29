import { Module } from '@nestjs/common';
import { GptService } from './services/gpt.service';
import { GptController } from './controller/gpt.controller';

@Module({
  imports: [],
  controllers: [GptController],
  providers: [GptService],
})
export class GptModule {}
