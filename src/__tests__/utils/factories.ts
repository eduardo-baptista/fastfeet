import faker from 'faker/locale/pt_BR';
import factory from 'factory-girl';

import User from '@models/User';
import Recipient from '@models/Recipient';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

factory.define('Recipient', Recipient, {
  name: faker.name.findName(),
  street: faker.address.streetName(),
  number: faker.random.number(),
  complement: faker.lorem.words(40),
  state: faker.address.state(),
  city: faker.address.city(),
  cep: faker.address.zipCode('########'),
});

export default factory;
