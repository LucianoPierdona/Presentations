import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SpeakerResDto } from '../speaker/dto/speaker-res.dto';
import { CreatePresentationReqDto } from './create-presentation-req.dto';

export class PresentationResDto extends CreatePresentationReqDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  id: number;

  @IsObject()
  @IsDefined()
  @ValidateNested()
  @Type(() => SpeakerResDto)
  speaker: SpeakerResDto;

  constructor(
    presentation: Partial<PresentationResDto>,
    speaker: SpeakerResDto,
  ) {
    super();

    Object.assign(this, presentation);

    this.speaker = speaker;
  }
}
