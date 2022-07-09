import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CreateSpeakerReqDto } from './create-speaker-req.dto';

export class SpeakerResDto extends CreateSpeakerReqDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  id: number;

  constructor(speaker: Partial<SpeakerResDto>) {
    super();

    Object.assign(this, speaker);
  }
}
