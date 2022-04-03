import {MigrationInterface, QueryRunner} from "typeorm";

export class petEntityJoinChanged1649027550763 implements MigrationInterface {
    name = 'petEntityJoinChanged1649027550763'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_64704296b7bd17e90ca0a620a98"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "REL_64704296b7bd17e90ca0a620a9"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP COLUMN "user_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "REL_64704296b7bd17e90ca0a620a9" UNIQUE ("user_id")`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_64704296b7bd17e90ca0a620a98" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
