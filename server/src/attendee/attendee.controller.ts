import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
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

  @Get()
  async list(): Promise<AttendeeResDto[]> {
    const attendees = await this.attendeeService.list();

    return attendees.map((attendee) => new AttendeeResDto(attendee));
  }

  @Post()
  async create(@Body() body: CreateAttendeeReqDto): Promise<AttendeeResDto> {
    const attendee = await this.attendeeService.create(body);

    return new AttendeeResDto(attendee);
  }
}
