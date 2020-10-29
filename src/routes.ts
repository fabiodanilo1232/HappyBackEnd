import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router();
const upload = multer(uploadConfig);

//mvc

//model - representação de uma entidade, dado
//views - como é disponivel pro front
//controller - logica das rotas

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;