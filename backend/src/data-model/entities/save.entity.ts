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
export class Save {
  @PrimaryColumn()
  questionId: number;

  @ManyToOne(() => Question, (question) => question.saves)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @PrimaryColumn()
  accountId: number;

  @ManyToOne(() => Account, (account) => account.saves)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @Column({ nullable: false })
  hasSaved: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
