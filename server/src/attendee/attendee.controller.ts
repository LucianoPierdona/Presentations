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
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('attendees')
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('attendee')
export class AttendeeController {
  constructor(private attendeeService: AttendeeService) {}

  @Get()
  @ApiResponse({
    description: 'return attendees',
    status: 200,
  })
  async list(): Promise<AttendeeResDto[]> {
    const attendees = await this.attendeeService.list();

    return attendees.map((attendee) => new AttendeeResDto(attendee));
  }

  @Post()
  @ApiBody({ type: CreateAttendeeReqDto })
  @ApiResponse({
    description: 'return created attendee',
    status: 201,
  })
  async create(@Body() body: CreateAttendeeReqDto): Promise<AttendeeResDto> {
    const attendee = await this.attendeeService.create(body);

    return new AttendeeResDto(attendee);
  }
}
