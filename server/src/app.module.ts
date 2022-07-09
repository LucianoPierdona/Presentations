import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from 'nestjs-pino';
import { join } from 'path';
import { AttendeeModule } from 'src/attendee/attendee.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { PresentationModule } from './presentation/presentation.module';

@Module({
  imports: [
    LoggerModule.forRoot(),
    PresentationModule,
    AttendeeModule,
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        name: configService.getString('DB_CONNECTION_NAME'),
        type: 'postgres',
        host: configService.getString('DB_CONNECTION_HOST'),
        port: configService.getNumber('DB_CONNECTION_PORT'),
        username: configService.getString('DB_CONNECTION_USERNAME'),
        password: configService.getString('DB_CONNECTION_PASSWORD'),
        database: configService.getString('DB_CONNECTION_DATABASE'),
        entities: [join(__dirname, '../') + '**/*.entity.js'],
        dropSchema: configService.getBoolean('DB_CONNECTION_DROP_SCHEMA'),
        synchronize: configService.getBoolean('DB_CONNECTION_SYNCHRONIZE'),
        logging: configService.getBoolean('DB_CONNECTION_LOGGING'),
        cache: configService.getBoolean('DB_CONNECTION_CACHE'),
        migrations: [
          join(__dirname, '../', 'database', 'migrations') + '**/*.js',
        ],
        migrationsRun: false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
