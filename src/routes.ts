import { Router } from 'express';

// controllers
import SessionController from '@controllers/SessionController';
import RecipientController from '@controllers/RecipientController';

// validations
import SessionStore from '@validators/SessionStore';

// middlewares
import authMiddleware from '@middleware/auth';

const routes = Router();

routes.post('/sessions', SessionStore, SessionController.store);

// auth
routes.use(authMiddleware);

routes.post('/recipients', RecipientController.store);

export default routes;
