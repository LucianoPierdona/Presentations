import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../common/entities/base.entity';

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
}
