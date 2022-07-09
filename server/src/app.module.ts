import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [PresentationModule, LoggerModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
