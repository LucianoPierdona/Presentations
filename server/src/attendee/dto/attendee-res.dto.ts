import { IsDate, IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateAttendeeReqDto } from './create-attendee-req.dto';

export class AttendeeResDto extends CreateAttendeeReqDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  id: number;

  @IsDate()
  @IsDefined()
  @IsNotEmpty()
  registered: string;

  constructor(attendee: Partial<AttendeeResDto>) {
    super();

    Object.assign(this, attendee);
  }
}
