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
export class Like {
  @PrimaryColumn()
  questionId: number;

  @ManyToOne(() => Question, (question) => question.likes)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @PrimaryColumn()
  accountId: number;

  @ManyToOne(() => Account, (account) => account.likes)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @Column({ nullable: false })
  hasLiked: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
