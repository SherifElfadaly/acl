import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class PermissionRoleTable1631799723128 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'permission_role',
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
              name: 'permission_id',
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
        'permission_role',
        new TableForeignKey({
          columnNames: ['permission_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'permissions',
        }),
      );

      await queryRunner.createForeignKey(
        'permission_role',
        new TableForeignKey({
          columnNames: ['role_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'roles',
        }),
      );
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('permission_role');
        const permissionIdForeignKey = table.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('permission_id') !== -1,
        );
        const roleIdForeignKey = table.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('role_id') !== -1,
        );
        await queryRunner.dropForeignKeys('permission_role', [
            permissionIdForeignKey,
            roleIdForeignKey,
        ]);

      await queryRunner.dropTable('permission_role');
    }
}
