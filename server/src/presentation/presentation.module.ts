import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentationController } from './presentation.controller';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';
import { Speaker } from './speaker/speaker.entity';
import { SpeakerService } from './speaker/speaker.service';

@Module({
  imports: [TypeOrmModule.forFeature([Presentation, Speaker])],
  controllers: [PresentationController],
  providers: [PresentationService, SpeakerService],
  exports: [PresentationService, SpeakerService],
})
export class PresentationModule {}
