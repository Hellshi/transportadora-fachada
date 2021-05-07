const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Distribuidora FastFeet',
          email: 'hellemsantos@gmail.com',
          password_hash: bcrypt.hashSync('123456', 8),
          Admin: true,
          rua: 'The Helm of Hella',
          cep: '123456',
          estado: 'The Shire',
          cidade: 'baggins',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),
  down: () => {},
};
