import { Router } from 'express';

// controllers
import SessionController from '@controllers/SessionController';

// validations
import SessionStore from '@validators/SessionStore';

// middlewares
import authMiddleware from '@middleware/auth';

const routes = Router();

routes.post('/sessions', SessionStore, SessionController.store);

// auth
routes.use(authMiddleware);

export default routes;
