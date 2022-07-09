import { MigrationInterface, QueryRunner } from 'typeorm';

export class INITIALMIGRATION1657382363255 implements MigrationInterface {
  name = 'INITIALMIGRATION1657382363255';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "speakers" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" text NOT NULL, "company" text NOT NULL, "email" text NOT NULL, "bio" text NOT NULL, CONSTRAINT "PK_b3818c94af77a0cf73403ecef14" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "presentations" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "presentation" text NOT NULL, "details" text NOT NULL, "room" integer NOT NULL, "speakerId" integer, CONSTRAINT "REL_685ff6012249bcd17d52393f4f" UNIQUE ("speakerId"), CONSTRAINT "PK_3f481051bbd7ae196d0ffa5a644" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "presentation_attendees" ("presentationId" integer NOT NULL, "attendeeId" integer NOT NULL, CONSTRAINT "PK_ebc79de76f5f136c48fc32163be" PRIMARY KEY ("presentationId", "attendeeId"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "attendees" ("createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "id" SERIAL NOT NULL, "name" text NOT NULL, "company" text NOT NULL, "email" text NOT NULL, CONSTRAINT "PK_0d01acb0e67860db61a6fb61a4a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "presentations" ADD CONSTRAINT "FK_685ff6012249bcd17d52393f4f3" FOREIGN KEY ("speakerId") REFERENCES "speakers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "presentation_attendees" ADD CONSTRAINT "FK_eda8cba46f0370c90db906567b4" FOREIGN KEY ("attendeeId") REFERENCES "attendees"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "presentation_attendees" ADD CONSTRAINT "FK_3c2bcc88ae8ed327f20c23bff94" FOREIGN KEY ("presentationId") REFERENCES "presentations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "presentation_attendees" DROP CONSTRAINT "FK_3c2bcc88ae8ed327f20c23bff94"`,
    );
    await queryRunner.query(
      `ALTER TABLE "presentation_attendees" DROP CONSTRAINT "FK_eda8cba46f0370c90db906567b4"`,
    );
    await queryRunner.query(
      `ALTER TABLE "presentations" DROP CONSTRAINT "FK_685ff6012249bcd17d52393f4f3"`,
    );
    await queryRunner.query(`DROP TABLE "attendees"`);
    await queryRunner.query(`DROP TABLE "presentation_attendees"`);
    await queryRunner.query(`DROP TABLE "presentations"`);
    await queryRunner.query(`DROP TABLE "speakers"`);
  }
}
