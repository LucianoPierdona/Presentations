import { Module } from '@nestjs/common';
import { AttendeeService } from './attendee.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AttendeeService],
  exports: [AttendeeService],
})
export class AttendeeModule {}
