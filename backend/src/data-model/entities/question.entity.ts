import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { Image } from './image.entity';
import { Account } from './account.entity';
import { Answer } from './answer.entity';
import { Save } from './save.entity';
import { Like } from './like.entity';
import { Dislike } from './dislike.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false, length: 150 })
  title: string;

  @Column({ nullable: false, length: 1000 })
  body: string;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
  categories: Promise<Category[]>;

  @OneToMany(() => Image, (image) => image.question, {
    cascade: true,
  })
  images: Promise<Image[]>;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Promise<Answer[]>;

  @OneToMany(() => Like, (like) => like.question)
  likes: Promise<Like[]>;

  @OneToMany(() => Dislike, (dislike) => dislike.question)
  dislikes: Promise<Dislike[]>;

  @OneToMany(() => Save, (save) => save.question)
  saves: Promise<Save[]>;

  @ManyToOne(() => Account, (account) => account.questions)
  createdBy: Account;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
