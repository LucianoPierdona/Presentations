import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationResDto } from './dto/presentation-res.dto';

@Injectable()
export class PresentationService {
  constructor(private logger: PinoLogger) {
    logger.setContext('PresentationService');
  }

  async create({
    details,
    presentation,
    room,
    speaker,
  }: CreatePresentationReqDto) {
    const createdSpeaker = {
      ...speaker,
      id: 1,
    };

    const createdPresentation = {
      id: 1,
      speaker: createdSpeaker,
      room,
      presentation,
      details,
      attendees: [],
    };

    return new PresentationResDto(createdPresentation, createdSpeaker);
  }
}
