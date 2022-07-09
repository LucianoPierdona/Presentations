import { Exclude } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSpeakerReqDto } from './create-speaker-req.dto';

export class SpeakerResDto extends CreateSpeakerReqDto {
  @Exclude()
  createdAt: Date;

  @Exclude()
  deletedAt: Date;

  @Exclude()
  updatedAt: Date;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  id: number;

  constructor(speaker: Partial<SpeakerResDto>) {
    super();

    Object.assign(this, speaker);
  }
}
