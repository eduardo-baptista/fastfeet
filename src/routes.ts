import { Router } from 'express';

import SessionController from '@controllers/SessionController';

const routes = Router();

routes.get('/auth', SessionController.store);

export default routes;
