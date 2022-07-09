import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AttendeeModule } from './attendee/attendee.module';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [LoggerModule.forRoot(), PresentationModule, AttendeeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
