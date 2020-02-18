import { Router } from 'express';

// controllers
import SessionController from '@controllers/SessionController';
import RecipientController from '@controllers/RecipientController';

// validations
import SessionStoreSchema, { SessionStore } from '@validators/SessionStore';
import RecipientStoreSchema, {
  RecipientStore,
} from '@validators/RecipientStore';

// middlewares
import authMiddleware from '@middleware/auth';
import validationMiddleware from '@middleware/validation';

const routes = Router();

routes.post(
  '/sessions',
  validationMiddleware<SessionStore>(SessionStoreSchema),
  SessionController.store
);

// auth
routes.use(authMiddleware);

routes.post(
  '/recipients',
  validationMiddleware<RecipientStore>(RecipientStoreSchema),
  RecipientController.store
);

export default routes;
