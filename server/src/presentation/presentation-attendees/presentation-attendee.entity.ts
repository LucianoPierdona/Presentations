import { Attendee } from '../../attendee/attendee.entity';
import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { Presentation } from '../presentation.entity';

@Entity('presentation_attendees')
export class PresentationAttendee {
  @PrimaryColumn('int')
  presentationId: number;

  @PrimaryColumn('int')
  attendeeId: number;

  @ManyToOne((type) => Attendee, (attendee) => attendee.presentations)
  attendee: Attendee;

  @ManyToOne((type) => Presentation, (presentation) => presentation.attendees)
  presentation: Presentation;
}
