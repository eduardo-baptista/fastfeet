import { Router } from 'express';

// controllers
import SessionController from '@controllers/SessionController';
import RecipientController from '@controllers/RecipientController';

// validations
import SessionStoreSchema, { SessionStore } from '@validators/SessionStore';
import RecipientStoreSchema, {
  RecipientStore,
} from '@validators/RecipientStore';
import RecipientUpdateSchema, {
  RecipientUpdate,
} from '@validators/RecipientUpdate';

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

routes.get('/recipients', RecipientController.index);
routes.post(
  '/recipients',
  validationMiddleware<RecipientStore>(RecipientStoreSchema),
  RecipientController.store
);
routes.put(
  '/recipients/:id',
  validationMiddleware<RecipientUpdate>(RecipientUpdateSchema),
  RecipientController.update
);
routes.delete('/recipients/:id', RecipientController.delete);

export default routes;
