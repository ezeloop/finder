import {MigrationInterface, QueryRunner} from "typeorm";

export class petAndPhoto1648869297713 implements MigrationInterface {
    name = 'petAndPhoto1648869297713'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "photo" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, "pet_id" integer, CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "isMissing" boolean NOT NULL DEFAULT false, "isMissingSince" TIMESTAMP, "lookingForHome" boolean NOT NULL DEFAULT false, "dateOfBirth" TIMESTAMP NOT NULL, "user_id" integer, CONSTRAINT "REL_64704296b7bd17e90ca0a620a9" UNIQUE ("user_id"), CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "photo" ADD CONSTRAINT "FK_728fe18beac61a6095c2ecbddd6" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64704296b7bd17e90ca0a620a98" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64704296b7bd17e90ca0a620a98"`);
        await queryRunner.query(`ALTER TABLE "photo" DROP CONSTRAINT "FK_728fe18beac61a6095c2ecbddd6"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "photo"`);
    }

}
