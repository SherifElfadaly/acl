import { define, factory } from 'typeorm-seeding';
import Faker from 'faker';
import { Role } from '../entities/role.entity';
import { User } from 'src/users/entities/user.entity';
import { Permission } from 'src/permissions/entities/permission.entity';

define(Role, (faker: typeof Faker) => {
  const role = new Role();
  role.name = faker.lorem.word();
  role.key = faker.lorem.slug();
  role.users = factory(User)() as any;
  role.permissions = factory(Permission)() as any;

  return role;
});
