import { Router } from 'express';
import multer from 'multer';

// controllers
import SessionController from '@controllers/SessionController';
import RecipientController from '@controllers/RecipientController';
import FileController from '@controllers/FileController';

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

// config
import multerConfig from '@config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post(
  '/sessions',
  validationMiddleware<SessionStore>(SessionStoreSchema),
  SessionController.store
);

// auth
routes.use(authMiddleware);

// file upload
routes.post('/files', upload.single('file'), FileController.store);

// recipients CRUD
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
