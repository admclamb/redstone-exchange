import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { Account } from './account.entity';
import { Comment } from './comment.entity';
import { Image } from './image.entity';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;

  @Column({ nullable: false, length: 750 })
  content: string;

  @OneToMany(() => Image, (image) => image.answer, {
    cascade: true,
  })
  images: Image[];

  @OneToMany(() => Comment, (comment) => comment.answer, {
    cascade: true,
  })
  comments: Comment[];

  @ManyToOne(() => Account, (account) => account.answers)
  @JoinTable()
  createdBy: Account;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
