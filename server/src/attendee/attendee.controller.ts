import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreateAttendeeReqDto } from './dto/create-attendee-req.dto';
import { AttendeeService } from './attendee.service';
import { AttendeeResDto } from './dto/attendee-res.dto';

@Controller('attendees')
@UseInterceptors(ClassSerializerInterceptor)
export class AttendeeController {
  constructor(private attendeeService: AttendeeService) {}

  @Post()
  async create(@Body() body: CreateAttendeeReqDto): Promise<AttendeeResDto> {
    const attendee = await this.attendeeService.create(body);

    return new AttendeeResDto(attendee);
  }
}
