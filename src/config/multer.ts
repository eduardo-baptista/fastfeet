import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

const pathToSave =
  process.env.NODE_ENV === 'test'
    ? resolve(__dirname, '..', '__tests__', 'filesMock', 'tmp')
    : resolve(__dirname, '..', '..', 'tmp', 'uploads');

export default {
  storage: multer.diskStorage({
    destination: pathToSave,
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err, '');

        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
