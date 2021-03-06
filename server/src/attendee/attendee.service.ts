import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinoLogger } from 'nestjs-pino';
import { FindOneOptions, Repository } from 'typeorm';
import { Attendee } from './attendee.entity';

import { CreateAttendeeReqDto } from './dto/create-attendee-req.dto';

@Injectable()
export class AttendeeService {
  constructor(
    @InjectRepository(Attendee)
    private attendeeRepository: Repository<Attendee>,
    private logger: PinoLogger,
  ) {
    logger.setContext('AttendeeService');
  }

  async create({
    company,
    email,
    name,
  }: CreateAttendeeReqDto): Promise<Attendee> {
    const attendee = new Attendee();

    attendee.company = company;
    attendee.email = email;
    attendee.name = name;

    await this.attendeeRepository.save(attendee);

    return attendee;
  }

  async findOne(
    id: number,
    options?: FindOneOptions<Attendee>,
  ): Promise<Attendee> {
    return this.attendeeRepository.findOne(id, options);
  }

  async list(): Promise<Attendee[]> {
    return this.attendeeRepository.find();
  }
}
