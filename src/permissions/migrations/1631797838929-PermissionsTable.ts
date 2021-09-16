import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class PermissionsTable1631797838929 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'permissions',
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
      await queryRunner.dropTable('permissions');
    }
}
