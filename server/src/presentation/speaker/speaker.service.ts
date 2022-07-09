import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PinoLogger } from 'nestjs-pino';
import { Repository } from 'typeorm';

import { CreateSpeakerReqDto } from './dto/create-speaker-req.dto';

import { SpeakerResDto } from './dto/speaker-res.dto';
import { Speaker } from './speaker.entity';

@Injectable()
export class SpeakerService {
  constructor(
    @InjectRepository(Speaker)
    private speakerRepository: Repository<Speaker>,
    private logger: PinoLogger,
  ) {
    logger.setContext('SpeakerService');
  }

  async create({
    bio,
    company,
    email,
    name,
  }: CreateSpeakerReqDto): Promise<Speaker> {
    const speaker = new Speaker();

    speaker.bio = bio;
    speaker.company = company;
    speaker.email = email;
    speaker.name = name;

    await this.speakerRepository.save(speaker);

    return speaker;
  }
}
