import {MigrationInterface, QueryRunner} from "typeorm";

export class creatingProvinceTable1649037994458 implements MigrationInterface {
    name = 'creatingProvinceTable1649037994458'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "province" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4f461cb46f57e806516b7073659" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD "province" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_a3dfd149d7432a23195019caa0a" FOREIGN KEY ("province") REFERENCES "province"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_a3dfd149d7432a23195019caa0a"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "province"`);
        await queryRunner.query(`DROP TABLE "province"`);
    }

}
