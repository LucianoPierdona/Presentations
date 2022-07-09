import { Module } from '@nestjs/common';
import { PresentationController } from './presentation.controller';
import { PresentationService } from './presentation.service';
import { SpeakerService } from './speaker/speaker.service';

@Module({
  imports: [],
  controllers: [PresentationController],
  providers: [PresentationService, SpeakerService],
  exports: [PresentationService, SpeakerService],
})
export class PresentationModule {}
