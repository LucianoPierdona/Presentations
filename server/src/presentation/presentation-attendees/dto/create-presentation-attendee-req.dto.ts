import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePresentationAttendeeReqDto {
  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  presentationId: number;

  @IsNumber()
  @IsNotEmpty()
  @IsDefined()
  attendeeId: number;
}
