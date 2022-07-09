import { Exclude } from 'class-transformer';
import { IsDate, IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { Attendee } from '../attendee.entity';
import { CreateAttendeeReqDto } from './create-attendee-req.dto';

export class AttendeeResDto extends CreateAttendeeReqDto {
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

  @IsDate()
  @IsDefined()
  @IsNotEmpty()
  registered: string;

  constructor(attendee: Partial<Attendee>) {
    super();

    Object.assign(this, attendee);

    this.registered = attendee.createdAt.toISOString();
  }
}
