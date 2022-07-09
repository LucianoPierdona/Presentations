import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Base } from '../common/entities/base.entity';
import { PresentationAttendee } from './presentation-attendees/presentation-attendee.entity';
import { Speaker } from './speaker/speaker.entity';

@Entity('presentations')
export class Presentation extends Base {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  presentation: string;

  @Column({ type: 'text' })
  details: string;

  @Column({ type: 'int' })
  room: number;

  @OneToOne(() => Speaker)
  @JoinColumn({ name: 'speakerId', referencedColumnName: 'id' })
  speaker: Speaker;

  @Column({ type: 'int', nullable: true })
  speakerId: string;

  @OneToMany(
    (type) => PresentationAttendee,
    (presentationAttendee) => presentationAttendee.presentation,
  )
  attendees: PresentationAttendee[];
}
