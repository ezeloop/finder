import {MigrationInterface, QueryRunner} from "typeorm";

export class deletingProvincesTable1649037750224 implements MigrationInterface {
    name = 'deletingProvincesTable1649037750224'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "province"`);
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "province" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_aa290c4049a8aa685a81483389e" UNIQUE ("name"), CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id"))`)
    }



}
