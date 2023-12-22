import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';

import { CommonModule } from './common/common.module';

import { AccountModule } from './account/account.module';

import entities from './data-model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { ReactionModule } from './reaction/reaction.module';
import { SavesModule } from './saves/saves.module';
import { AnswerModule } from './answer/answer.module';
import { CommentModule } from './comment/comment.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRESQL_HOST'),
        port: +configService.get<number>('POSTGRESQL_PORT'),
        username: configService.get('POSTGRESQL_USERNAME'),
        password: configService.get('POSTGRESQL_PASSWORD'),
        database: configService.get('POSTGRESQL_NAME'),
        synchronize: true,
        entities: entities,
      }),
      inject: [ConfigService],
    }),
    MessagesModule,
    CommonModule,
    AccountModule,
    QuestionModule,
    CategoryModule,
    ImageModule,
    ReactionModule,
    SavesModule,
    AnswerModule,
    CommentModule,
    ExperienceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
