import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Account } from './account.entity';
import { Question } from './question.entity';

@Entity()
export class Dislike {
  @PrimaryColumn()
  questionId: number;

  @ManyToOne(() => Question, (question) => question.dislikes)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @PrimaryColumn()
  accountId: number;

  @ManyToOne(() => Account, (account) => account.dislikes)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @Column({ nullable: false })
  hasDisliked: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
