import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PresentationController } from './presentation.controller';
import { Presentation } from './presentation.entity';
import { PresentationService } from './presentation.service';
import { SpeakerService } from './speaker/speaker.service';

@Module({
  imports: [TypeOrmModule.forFeature([Presentation])],
  controllers: [PresentationController],
  providers: [PresentationService, SpeakerService],
  exports: [PresentationService, SpeakerService],
})
export class PresentationModule {}
