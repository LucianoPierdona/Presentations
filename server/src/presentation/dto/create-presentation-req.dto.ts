import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import { CreateSpeakerReqDto } from '../speaker/dto/create-speaker-req.dto';

export class CreatePresentationReqDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  presentation: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  details: string;

  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  room: number;

  @IsObject()
  @IsDefined()
  @ValidateNested()
  @Type(() => CreateSpeakerReqDto)
  speaker: CreateSpeakerReqDto;
}
