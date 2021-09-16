import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class RoleUserTable1631799359596 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'role_user',
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
              name: 'user_id',
              type: 'int',
              unsigned: true,
              isNullable: false,
            },
            {
              name: 'role_id',
              type: 'int',
              unsigned: true,
              isNullable: false,
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

      await queryRunner.createForeignKey(
        'role_user',
        new TableForeignKey({
          columnNames: ['user_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
        }),
      );

      await queryRunner.createForeignKey(
        'role_user',
        new TableForeignKey({
          columnNames: ['role_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'roles',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('role_user');
        const userIdForeignKey = table.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('user_id') !== -1,
        );
        const roleIdForeignKey = table.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('role_id') !== -1,
        );
        await queryRunner.dropForeignKeys('role_user', [
            userIdForeignKey,
            roleIdForeignKey,
        ]);

      await queryRunner.dropTable('role_user');
    }
}
