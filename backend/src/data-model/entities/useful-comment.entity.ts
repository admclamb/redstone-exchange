import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Account } from './account.entity';
import { Comment } from './comment.entity';

@Entity()
export class UsefulComment {
  @PrimaryColumn()
  commentId: number;

  @ManyToOne(() => Comment, (comment) => comment.commentLikes)
  @JoinColumn({ name: 'question_id' })
  comment: Comment;

  @PrimaryColumn()
  accountId: number;

  @ManyToOne(() => Account, (account) => account.commentLikes)
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @Column({ nullable: false })
  hasFoundUseful: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
