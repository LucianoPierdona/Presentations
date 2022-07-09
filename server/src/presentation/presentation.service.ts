import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationResDto } from './dto/presentation-res.dto';
import { SpeakerService } from './speaker/speaker.service';

@Injectable()
export class PresentationService {
  constructor(
    private speakerService: SpeakerService,
    private logger: PinoLogger,
  ) {
    logger.setContext('PresentationService');
  }

  async create({
    details,
    presentation,
    room,
    speaker,
  }: CreatePresentationReqDto): Promise<PresentationResDto> {
    const createdSpeaker = await this.speakerService.create(speaker);

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
