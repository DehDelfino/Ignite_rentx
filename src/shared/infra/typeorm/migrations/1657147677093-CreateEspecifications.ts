import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEspecifications1657147677093 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table(
                {
                    name: "Especifications",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true
                        },

                        {
                            name: "name",
                            type: "varchar",

                        },
                        {
                            name: "description",
                            type: "varchar",

                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"

                        },
                    ]
                }
            )
        )






    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("Especifications")
    }

}
