import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinoLogger } from 'nestjs-pino';
import { Repository } from 'typeorm';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationResDto } from './dto/presentation-res.dto';
import { Presentation } from './presentation.entity';
import { SpeakerService } from './speaker/speaker.service';

@Injectable()
export class PresentationService {
  constructor(
    private speakerService: SpeakerService,
    @InjectRepository(Presentation)
    private presentationRepository: Repository<Presentation>,
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

    const createdPresentation = new Presentation();

    createdPresentation.details = details;
    createdPresentation.presentation = presentation;
    createdPresentation.room = room;

    await this.presentationRepository.save(createdPresentation);

    return new PresentationResDto(createdPresentation, createdSpeaker);
  }
}
