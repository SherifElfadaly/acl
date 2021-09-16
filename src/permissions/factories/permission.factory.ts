import { define, factory } from 'typeorm-seeding';
import Faker from 'faker';
import { Permission } from '../entities/permission.entity';
import { Role } from 'src/roles/entities/role.entity';

define(Permission, (faker: typeof Faker) => {
  const permission = new Permission();
  permission.name = faker.lorem.word();
  permission.key = faker.lorem.slug();
  permission.roles = factory(Role)() as any;

  return permission;
});
