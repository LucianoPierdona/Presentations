import { IsDefined, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateAttendeeReqDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  company: string;

  @IsEmail()
  @IsNotEmpty()
  @IsDefined()
  email: string;
}
