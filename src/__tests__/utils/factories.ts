import faker from 'faker/locale/pt_BR';
import factory from 'factory-girl';

import User from '@models/User';
import Recipient from '@models/Recipient';
import File from '@models/File';
import Deliveryman from '@models/Deliveryman';
import Order from '@models/Order';

factory.define('User', User, {
  name: () => faker.name.findName(),
  email: () => faker.internet.email(),
  password: () => faker.internet.password(),
});

factory.define('Recipient', Recipient, {
  name: () => faker.name.findName(),
  street: () => faker.address.streetName(),
  number: () => faker.random.number(),
  complement: () => faker.lorem.words(4),
  state: () => faker.address.state(),
  city: () => faker.address.city(),
  cep: () => faker.address.zipCode('########'),
});

factory.define('File', File, {
  name: () => faker.system.fileName(),
  path: () => `/tmp/${faker.system.fileName()}`,
});

factory.define('Deliveryman', Deliveryman, {
  name: () => faker.name.findName(),
  avatar_id: factory.assoc('File', 'id'),
  email: () => faker.internet.email(),
});

factory.define('Order', Order, {
  recipient_id: factory.assoc('Recipient', 'id'),
  deliveryman_id: factory.assoc('Deliveryman', 'id'),
  product: () => faker.random.word(),
});

export default factory;
