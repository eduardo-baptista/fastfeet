import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ ok: process.env.DB_URL }));

export default routes;
