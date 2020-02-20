import { Router } from 'express';
import multer from 'multer';

// controllers
import SessionController from '@controllers/SessionController';
import RecipientController from '@controllers/RecipientController';
import FileController from '@controllers/FileController';
import DeliverymanController from '@controllers/DeliverymanController';

// validations
import SessionStoreSchema from '@validators/SessionStore';
import RecipientStoreSchema from '@validators/RecipientStore';
import RecipientUpdateSchema from '@validators/RecipientUpdate';
import DeliverymanStoreSchema from '@validators/DeliverymanStore';

// middlewares
import authMiddleware from '@middleware/auth';
import validationMiddleware from '@middleware/validation';

// config
import multerConfig from '@config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post(
  '/sessions',
  validationMiddleware(SessionStoreSchema),
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
  validationMiddleware(RecipientStoreSchema),
  RecipientController.store
);
routes.put(
  '/recipients/:id',
  validationMiddleware(RecipientUpdateSchema),
  RecipientController.update
);
routes.delete('/recipients/:id', RecipientController.delete);

// deliveryman CRUD
routes.post(
  '/deliverymen',
  validationMiddleware(DeliverymanStoreSchema),
  DeliverymanController.store
);

export default routes;
