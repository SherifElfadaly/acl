import { define, factory } from 'typeorm-seeding';
import Faker from 'faker';
import { User } from '../entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';

define(User, (faker: typeof Faker) => {
  const user = new User();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.roles = factory(Role)() as any;

  return user;
});
