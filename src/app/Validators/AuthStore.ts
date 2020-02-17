import { Request, Response, NextFunction, RequestHandler } from 'express';
import * as Yup from 'yup';

const AuthStore: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'validation failed', messages: err.inner });
  }
};

export default AuthStore;
