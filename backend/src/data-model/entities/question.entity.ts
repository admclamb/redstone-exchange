import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false, length: 150 })
  title: string;

  @Column({ nullable: false, length: 1000 })
  body: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Promise<Category[]>;
}
