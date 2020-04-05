import { Router } from 'express';
import multer from 'multer';

// controllers
import SessionController from '@controllers/SessionController';
import RecipientController from '@controllers/RecipientController';
import FileController from '@controllers/FileController';
import DeliverymanController from '@controllers/DeliverymanController';
import OrderController from '@controllers/OrderController';
import DeliveryController from '@controllers/DeliveryController';
import StartDeliveryController from '@controllers/StartDeliveryController';
import EndDeliveryController from '@controllers/EndDeliveryController';
import DeliveryProblemController from '@controllers/DeliveryProblemController';
import CancelDeliveryController from '@controllers/CancelDeliveryController';
import ProblemController from '@controllers/ProblemController';

// validations
import SessionStoreSchema from '@validators/SessionStore';
import RecipientStoreSchema from '@validators/RecipientStore';
import RecipientUpdateSchema from '@validators/RecipientUpdate';
import DeliverymanStoreSchema from '@validators/DeliverymanStore';
import DeliverymanUpdateSchema from '@validators/DeliverymanUpdate';
import OrderStoreSchema from '@validators/OrderStore';
import OrderUpdateSchema from '@validators/OrderUpdate';
import StartDeliveryStoreSchema from '@validators/StartDeliveryStore';
import EndDeliveryStoreSchema from '@validators/EndDeliveryStore';
import DeliveryProblemStoreSchema from '@validators/DeliveryProblemStore';

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
routes.get('/recipients/:id', RecipientController.show);
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
routes.put(
  '/deliverymen/:id',
  validationMiddleware(DeliverymanUpdateSchema),
  DeliverymanController.update
);
routes.get('/deliverymen', DeliverymanController.index);
routes.get('/deliverymen/:id', DeliverymanController.show);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

// show order per deliveryman
routes.get('/deliveryman/:deliverymanid/deliveries', DeliveryController.index);

// start delivery
routes.post(
  '/deliveries/start',
  validationMiddleware(StartDeliveryStoreSchema),
  StartDeliveryController.store
);

// cancel delivery by problem id
routes.delete('/problem/:id/cancel-delivery', CancelDeliveryController.delete);

// end delivery
routes.post(
  '/deliveries/end',
  validationMiddleware(EndDeliveryStoreSchema),
  EndDeliveryController.store
);

// list all problems
routes.get('/problems', ProblemController.index);

// list problems per order
routes.get('/delivery/:deliveryid/problems', DeliveryProblemController.index);

// create new problem
routes.post(
  '/delivery/:deliveryid/problems',
  validationMiddleware(DeliveryProblemStoreSchema),
  DeliveryProblemController.store
);

// order CRUD
routes.post(
  '/orders',
  validationMiddleware(OrderStoreSchema),
  OrderController.store
);
routes.put(
  '/orders/:id',
  validationMiddleware(OrderUpdateSchema),
  OrderController.update
);
routes.get('/orders', OrderController.index);
routes.get('/orders/:id', OrderController.show);
routes.delete('/orders/:id', OrderController.delete);

export default routes;
