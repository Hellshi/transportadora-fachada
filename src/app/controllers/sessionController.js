import jwt from 'jsonwebtoken';
import User from '../models/user';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = User.findOne({ where: { email } });

    if (!user) {
      res.status(400).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      res.status(400).json({ error: 'Passwords doesnt match' });
    }
  }
}

export default new SessionController();
