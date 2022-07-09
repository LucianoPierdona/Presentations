import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinoLogger } from 'nestjs-pino';
import { AttendeeService } from '../attendee/attendee.service';
import { Repository } from 'typeorm';
import { CreatePresentationReqDto } from './dto/create-presentation-req.dto';
import { PresentationAttendeeService } from './presentation-attendees/presentation-attendee.service';
import { Presentation } from './presentation.entity';
import { SpeakerService } from './speaker/speaker.service';

@Injectable()
export class PresentationService {
  constructor(
    private speakerService: SpeakerService,
    private presentationAttendeeService: PresentationAttendeeService,
    @InjectRepository(Presentation)
    private presentationRepository: Repository<Presentation>,
    private attendeeService: AttendeeService,
    private logger: PinoLogger,
  ) {
    logger.setContext('PresentationService');
  }

  async create({
    details,
    presentation,
    room,
    speaker,
  }: CreatePresentationReqDto): Promise<Presentation> {
    const createdSpeaker = await this.speakerService.create(speaker);

    const createdPresentation = new Presentation();

    createdPresentation.details = details;
    createdPresentation.presentation = presentation;
    createdPresentation.room = room;
    createdPresentation.speaker = createdSpeaker;

    await this.presentationRepository.save(createdPresentation);

    return createdPresentation;
  }

  async addAttendeeToPresentation({ attendeeId, presentationId }: any) {
    const presentation = await this.presentationRepository.findOne(
      presentationId,
    );

    if (!presentation) {
      throw new NotFoundException('Presentation not found');
    }

    const attendee = await this.attendeeService.findOne(attendeeId);

    if (!attendee) {
      throw new NotFoundException('Attendee not found');
    }

    const presentationAttendee = await this.presentationAttendeeService.create({
      attendeeId,
      presentationId,
    });

    this.logger.info(presentationAttendee);

    const presentationWithAttendees = await this.presentationRepository.findOne(
      presentationId,
      {
        relations: ['attendees', 'attendees.attendee', 'speaker'],
      },
    );

    return presentationWithAttendees;
  }
}
