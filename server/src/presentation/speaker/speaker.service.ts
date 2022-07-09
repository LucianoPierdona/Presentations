import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

import { CreateSpeakerReqDto } from './dto/create-speaker-req.dto';

import { SpeakerResDto } from './dto/speaker-res.dto';

@Injectable()
export class SpeakerService {
  constructor(private logger: PinoLogger) {
    logger.setContext('SpeakerService');
  }

  async create(body: CreateSpeakerReqDto): Promise<SpeakerResDto> {
    const createdSpeaker = {
      ...body,
      id: 1,
    };

    return new SpeakerResDto(createdSpeaker);
  }
}
