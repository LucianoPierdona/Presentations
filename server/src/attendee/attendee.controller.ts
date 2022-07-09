import { Body, Controller, Post } from '@nestjs/common';
import { CreateAttendeeReqDto } from './dto/create-attendee-req.dto';
import { AttendeeService } from './attendee.service';
import { AttendeeResDto } from './dto/attendee-res.dto';

@Controller('attendees')
export class AttendeeController {
  constructor(private attendeeService: AttendeeService) {}

  @Post()
  async create(@Body() body: CreateAttendeeReqDto): Promise<AttendeeResDto> {
    return this.attendeeService.create(body);
  }
}
