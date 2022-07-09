import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinoLogger } from 'nestjs-pino';
import { Repository } from 'typeorm';

import { CreatePresentationAttendeeReqDto } from './dto/create-presentation-attendee-req.dto';

import { PresentationAttendee } from './presentation-attendee.entity';

@Injectable()
export class PresentationAttendeeService {
  constructor(
    @InjectRepository(PresentationAttendee)
    private presentationattendeeRepository: Repository<PresentationAttendee>,
    private logger: PinoLogger,
  ) {
    logger.setContext('PresentationAttendeeService');
  }

  async create({
    attendeeId,
    presentationId,
  }: CreatePresentationAttendeeReqDto): Promise<PresentationAttendee> {
    const alreadyExists = await this.presentationattendeeRepository.findOne({
      attendeeId,
      presentationId,
    });

    if (alreadyExists) {
      throw new BadRequestException('Attendee already added to presentation');
    }

    const presentationattendee = new PresentationAttendee();

    presentationattendee.attendeeId = attendeeId;
    presentationattendee.presentationId = presentationId;

    await this.presentationattendeeRepository.save(presentationattendee);

    return presentationattendee;
  }
}
