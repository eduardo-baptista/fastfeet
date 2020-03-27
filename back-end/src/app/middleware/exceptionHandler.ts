import { ErrorRequestHandler } from 'express';
import Youch from 'youch';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const exceptionHandler: ErrorRequestHandler = async (err, req, res, _next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, req).toJSON();
    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'internal server error' });
};

export default exceptionHandler;
