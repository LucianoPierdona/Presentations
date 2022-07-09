import { Module } from '@nestjs/common';
import { PresentationService } from './presentation.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PresentationService],
  exports: [PresentationService],
})
export class PresentationModule {}
