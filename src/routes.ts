import { Router } from 'express';

// controllers
import SessionController from '@controllers/SessionController';

// validations
import SessionStore from '@validators/SessionStore';

const routes = Router();

routes.post('/sessions', SessionStore, SessionController.store);

export default routes;
