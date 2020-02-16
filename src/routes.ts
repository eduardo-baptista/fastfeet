import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: 'typescript is life' }));

export default routes;
