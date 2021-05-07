import { Router } from 'express';

import UserController from './app/controllers/userController';

const route = new Router();

route.post('/users', UserController.store);

export default route;
