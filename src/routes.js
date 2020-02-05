import {Router} from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.status(200).send("Oi mundo!")
});

export default routes;