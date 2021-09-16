import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class RolesTable1631797829750 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'roles',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
              unsigned: true,
            },
            {
              name: 'name',
              type: 'varchar',
              isUnique: true,
              isNullable: false,
            },
            {
              name: 'key',
              type: 'varchar',
              isNullable: false,
              isUnique: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'deleted_at',
              type: 'timestamp',
              isNullable: true,
            },
          ],
        }),
        true,
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('roles');
    }
}
