const bcrypt = require('bcryptjs');

module.exports = {
  up: async QueryInterface => {
    const user = await QueryInterface.rawSelect(
      'users',
      {
        where: { email: 'admin@fastfeet.com' },
      },
      'email'
    );
    if (user) return;
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'admin@fastfeet.com',
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
