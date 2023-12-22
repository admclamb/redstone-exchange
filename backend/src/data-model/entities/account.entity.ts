import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Question } from './question.entity';
import { Answer } from './answer.entity';
import { Save } from './save.entity';
import { Dislike } from './dislike.entity';
import { Like } from './like.entity';
import { UsefulComment } from './useful-comment.entity';
import { Experience } from './experience.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  sub: string;

  @Column({ nullable: false, unique: true, length: 100 })
  username: string;

  @OneToMany(() => Question, (question) => question.createdBy)
  questions: Promise<Question[]>;

  @OneToMany(() => Answer, (answer) => answer.createdBy)
  answers: Promise<Answer[]>;

  @OneToMany(() => Like, (like) => like.question)
  likes: Promise<Like[]>;

  @OneToMany(() => Dislike, (dislike) => dislike.question)
  dislikes: Promise<Dislike[]>;

  @OneToMany(() => Save, (save) => save.account)
  saves: Promise<Save[]>;

  @OneToOne(() => Experience)
  @JoinColumn()
  experience: Promise<Experience>;

  @OneToMany(() => UsefulComment, (usefulComment) => usefulComment.account)
  commentLikes: Promise<UsefulComment[]>;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
