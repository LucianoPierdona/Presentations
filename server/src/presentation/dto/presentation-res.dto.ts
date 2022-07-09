import { Exclude, Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Presentation } from '../presentation.entity';
import { SpeakerResDto } from '../speaker/dto/speaker-res.dto';
import { CreatePresentationReqDto } from './create-presentation-req.dto';

export class PresentationResDto extends CreatePresentationReqDto {
  @Exclude()
  createdAt: Date;

  @Exclude()
  deletedAt: Date;

  @Exclude()
  updatedAt: Date;

  @Exclude()
  speakerId: number;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  id: number;

  @IsObject()
  @IsDefined()
  @ValidateNested()
  @Type(() => SpeakerResDto)
  speaker: SpeakerResDto;

  constructor(presentation: Partial<Presentation>) {
    super();

    Object.assign(this, presentation);

    this.speaker = new SpeakerResDto(presentation.speaker);
  }
}
