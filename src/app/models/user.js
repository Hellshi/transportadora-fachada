import Sequelize, { Model } from 'sequelize';
import Bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        rua: Sequelize.STRING,
        cep: Sequelize.STRING,
        cidade: Sequelize.STRING,
        estado: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await Bcrypt.hash(user.password, 10);
      }
    });

    return this;
  }

  checkPassword(password) {
    return Bcrypt.compare(password, this.password_hash);
  }
}

export default User;
