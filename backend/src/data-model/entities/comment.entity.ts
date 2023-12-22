import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Account } from './account.entity';
import { Answer } from './answer.entity';
import { UsefulComment } from './useful-comment.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false, length: 750 })
  text: string;

  @ManyToOne(() => Answer, (answer) => answer.comments)
  answer: Answer;

  @ManyToOne(() => Account, (account) => account.answers)
  @JoinTable()
  createdBy: Account;

  @OneToMany(() => UsefulComment, (usefulComment) => usefulComment.comment)
  commentLikes: UsefulComment[];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
