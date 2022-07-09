import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendeeModule } from '../attendee/attendee.module';
import { PresentationAttendee } from './presentation-attendees/presentation-attendee.entity';
import { PresentationAttendeeService } from './presentation-attendees/presentation-attendee.service';
import { PresentationController } from './presentation.controller';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';
import { Speaker } from './speaker/speaker.entity';
import { SpeakerService } from './speaker/speaker.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Presentation, Speaker, PresentationAttendee]),
    AttendeeModule,
  ],
  controllers: [PresentationController],
  providers: [PresentationService, SpeakerService, PresentationAttendeeService],
  exports: [PresentationService, SpeakerService, PresentationAttendeeService],
})
export class PresentationModule {}
