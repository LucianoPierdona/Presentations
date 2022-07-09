import { PresentationAttendee } from '../presentation/presentation-attendees/presentation-attendee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../common/entities/base.entity';

@Entity('attendees')
export class Attendee extends Base {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  company: string;

  @Column({ type: 'text' })
  email: string;

  @OneToMany(
    (type) => PresentationAttendee,
    (presentationAttendee) => presentationAttendee.attendee,
  )
  presentations: PresentationAttendee[];
}
