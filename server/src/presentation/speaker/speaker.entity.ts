import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../../common/entities/base.entity';

@Entity('speakers')
export class Speaker extends Base {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  company: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  bio: string;
}
