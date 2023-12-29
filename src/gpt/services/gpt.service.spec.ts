import { Test, TestingModule } from '@nestjs/testing';
import { GptService } from './gpt.service';
import { GptModule } from '../gpt.module';

describe('GptService', () => {
  let service: GptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GptModule],
    }).compile();

    service = module.get<GptService>(GptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
