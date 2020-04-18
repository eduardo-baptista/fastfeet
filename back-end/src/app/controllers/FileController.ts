import { Request, Response } from 'express';

import File from '@models/File';

class FileController {
  async store(req: Request, res: Response): Promise<Response> {
    if (!req.file) return res.status(400).json({ error: 'File required' });
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.status(201).json(file);
  }
}

export default new FileController();
