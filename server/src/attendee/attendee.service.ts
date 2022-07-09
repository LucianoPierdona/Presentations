import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { AttendeeResDto } from './dto/attendee-res.dto';
import { CreateAttendeeReqDto } from './dto/create-attendee-req.dto';

@Injectable()
export class AttendeeService {
  constructor(private logger: PinoLogger) {
    logger.setContext('AttendeeService');
  }

  async create(body: CreateAttendeeReqDto): Promise<AttendeeResDto> {
    const createdAttendee = {
      ...body,
      id: 1,
      registered: new Date().toISOString(),
    };

    return new AttendeeResDto(createdAttendee);
  }
}
