import {MigrationInterface, QueryRunner} from "typeorm";

export class animalEntityAdded1649030005160 implements MigrationInterface {
    name = 'animalEntityAdded1649030005160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "detail" character varying, CONSTRAINT "UQ_31a3be0a6dc5997e2aafbafe4d6" UNIQUE ("name"), CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "animal"`);
    }

}
