import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUsers1648856122188 implements MigrationInterface {
    name = 'changeUsers1648856122188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "creation_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "creation_at"`);
    }

}
