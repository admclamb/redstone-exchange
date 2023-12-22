import { MigrationInterface, QueryRunner } from "typeorm";

export class Setup1703286274731 implements MigrationInterface {
    name = 'Setup1703286274731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name"), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "useful_comment" ("commentId" integer NOT NULL, "accountId" integer NOT NULL, "hasFoundUseful" boolean NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "question_id" uuid, "account_id" uuid, CONSTRAINT "PK_707b122b0d194db1ce58ededf86" PRIMARY KEY ("commentId", "accountId"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying(750) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "answerId" uuid, "createdById" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying(750) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "questionId" uuid, "createdById" uuid, CONSTRAINT "PK_9232db17b63fb1e94f97e5c224f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image_url" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "questionId" uuid, "answerId" uuid, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "save" ("questionId" integer NOT NULL, "accountId" integer NOT NULL, "hasSaved" boolean NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "question_id" uuid, "account_id" uuid, CONSTRAINT "PK_a8ba8ead77389c9b5a9c2ddc7af" PRIMARY KEY ("questionId", "accountId"))`);
        await queryRunner.query(`CREATE TABLE "like" ("questionId" integer NOT NULL, "accountId" integer NOT NULL, "hasLiked" boolean NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "question_id" uuid, "account_id" uuid, CONSTRAINT "PK_f566475e8b269a501cf12d973c6" PRIMARY KEY ("questionId", "accountId"))`);
        await queryRunner.query(`CREATE TABLE "dislike" ("questionId" integer NOT NULL, "accountId" integer NOT NULL, "hasDisliked" boolean NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "question_id" uuid, "account_id" uuid, CONSTRAINT "PK_e05e24870648433d5ce98b2f99a" PRIMARY KEY ("questionId", "accountId"))`);
        await queryRunner.query(`CREATE TABLE "question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(150) NOT NULL, "body" character varying(1000) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdById" uuid, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "experience" ("id" SERIAL NOT NULL, "xp" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_5e8d5a534100e1b17ee2efa429a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "account" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sub" character varying NOT NULL, "username" character varying(100) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "experienceId" integer, CONSTRAINT "UQ_41dfcb70af895ddf9a53094515b" UNIQUE ("username"), CONSTRAINT "REL_df205b8d5384e28a01aeef84a8" UNIQUE ("experienceId"), CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question_categories_category" ("questionId" uuid NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_11044aadb95ef30daf7d1363d31" PRIMARY KEY ("questionId", "categoryId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_21433e6d9a0e7e79c36b4ae69f" ON "question_categories_category" ("questionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9cf04f10454634f887ade56562" ON "question_categories_category" ("categoryId") `);
        await queryRunner.query(`ALTER TABLE "useful_comment" ADD CONSTRAINT "FK_6ae85d808ba524c82c5a2d76816" FOREIGN KEY ("question_id") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "useful_comment" ADD CONSTRAINT "FK_1240d55749186644245c787bdf1" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_ac686892bd76cc014c367345af2" FOREIGN KEY ("answerId") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_63ac916757350d28f05c5a6a4ba" FOREIGN KEY ("createdById") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer" ADD CONSTRAINT "FK_f636f6e852686173ea947f29045" FOREIGN KEY ("createdById") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_59d90b2270ec4fcd18c0da491bf" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_5aa502d6a0a251f4751381de874" FOREIGN KEY ("answerId") REFERENCES "answer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "save" ADD CONSTRAINT "FK_a1d1a159ef6c36076ac1705747a" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "save" ADD CONSTRAINT "FK_6a2477d6b5632d78de3f9290191" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_f3407d4f540ca15f5e9dfc6d1a7" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_62c4c7ae020b2642bb7e5eac681" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dislike" ADD CONSTRAINT "FK_a6b4b325a00b669ef3acb74de5d" FOREIGN KEY ("question_id") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dislike" ADD CONSTRAINT "FK_2c935e55f49e722433399c5bc1d" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_187915d8eaa010cde8b053b35d5" FOREIGN KEY ("createdById") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_df205b8d5384e28a01aeef84a8c" FOREIGN KEY ("experienceId") REFERENCES "experience"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_categories_category" ADD CONSTRAINT "FK_21433e6d9a0e7e79c36b4ae69fd" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "question_categories_category" ADD CONSTRAINT "FK_9cf04f10454634f887ade565622" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_categories_category" DROP CONSTRAINT "FK_9cf04f10454634f887ade565622"`);
        await queryRunner.query(`ALTER TABLE "question_categories_category" DROP CONSTRAINT "FK_21433e6d9a0e7e79c36b4ae69fd"`);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_df205b8d5384e28a01aeef84a8c"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_187915d8eaa010cde8b053b35d5"`);
        await queryRunner.query(`ALTER TABLE "dislike" DROP CONSTRAINT "FK_2c935e55f49e722433399c5bc1d"`);
        await queryRunner.query(`ALTER TABLE "dislike" DROP CONSTRAINT "FK_a6b4b325a00b669ef3acb74de5d"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_62c4c7ae020b2642bb7e5eac681"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_f3407d4f540ca15f5e9dfc6d1a7"`);
        await queryRunner.query(`ALTER TABLE "save" DROP CONSTRAINT "FK_6a2477d6b5632d78de3f9290191"`);
        await queryRunner.query(`ALTER TABLE "save" DROP CONSTRAINT "FK_a1d1a159ef6c36076ac1705747a"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_5aa502d6a0a251f4751381de874"`);
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_59d90b2270ec4fcd18c0da491bf"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_f636f6e852686173ea947f29045"`);
        await queryRunner.query(`ALTER TABLE "answer" DROP CONSTRAINT "FK_a4013f10cd6924793fbd5f0d637"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_63ac916757350d28f05c5a6a4ba"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_ac686892bd76cc014c367345af2"`);
        await queryRunner.query(`ALTER TABLE "useful_comment" DROP CONSTRAINT "FK_1240d55749186644245c787bdf1"`);
        await queryRunner.query(`ALTER TABLE "useful_comment" DROP CONSTRAINT "FK_6ae85d808ba524c82c5a2d76816"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9cf04f10454634f887ade56562"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_21433e6d9a0e7e79c36b4ae69f"`);
        await queryRunner.query(`DROP TABLE "question_categories_category"`);
        await queryRunner.query(`DROP TABLE "account"`);
        await queryRunner.query(`DROP TABLE "experience"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "dislike"`);
        await queryRunner.query(`DROP TABLE "like"`);
        await queryRunner.query(`DROP TABLE "save"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "answer"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "useful_comment"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
