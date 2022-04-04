import {MigrationInterface, QueryRunner} from "typeorm";

export class petEntityChangegOneToOneAnimalAdded1649034150155 implements MigrationInterface {
    name = 'petEntityChangegOneToOneAnimalAdded1649034150155'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" ADD "typeOfAnimal" integer`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "UQ_d4ca29ef84db2d5c062cd19cf77" UNIQUE ("typeOfAnimal")`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_d4ca29ef84db2d5c062cd19cf77" FOREIGN KEY ("typeOfAnimal") REFERENCES "animal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_d4ca29ef84db2d5c062cd19cf77"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "UQ_d4ca29ef84db2d5c062cd19cf77"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP COLUMN "typeOfAnimal"`);
    }

}
