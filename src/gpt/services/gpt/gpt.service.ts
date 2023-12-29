import { Injectable } from '@nestjs/common';

@Injectable()
export class GptService {
  orthographyCheck(values: string) {
    return values;
  }
}
