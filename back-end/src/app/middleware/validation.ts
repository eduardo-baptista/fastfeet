import { RequestHandler } from 'express';
import { Schema } from 'yup';

const validationMiddleware = <T>(schema: Schema<T>): RequestHandler => {
  const validator: RequestHandler = async (req, res, next) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      return next();
    } catch (err) {
      return res
        .status(400)
        .json({ error: 'validation failed', messages: err.inner });
    }
  };

  return validator;
};

export default validationMiddleware;
