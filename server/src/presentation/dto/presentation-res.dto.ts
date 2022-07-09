import { Exclude, Type } from 'class-transformer';
import {
  IsArray,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { AttendeeResDto } from '../../attendee/dto/attendee-res.dto';
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

  @IsArray()
  @IsDefined()
  @ValidateNested()
  @Type(() => AttendeeResDto)
  attendees: AttendeeResDto[];

  constructor(presentation: Partial<Presentation>) {
    super();

    Object.assign(this, presentation);

    this.speaker = new SpeakerResDto(presentation.speaker);

    if (presentation.attendees) {
      const attendees = presentation.attendees
        .map((attendee) => new AttendeeResDto({ ...attendee.attendee }))
        .flat();

      this.attendees = attendees;
    }
  }
}
