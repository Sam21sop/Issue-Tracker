import { Router } from 'express';
import homeController from '../controllers/homeControllers';


const homeRouter = Router();

homeRouter.get('/', homeController);

export default homeRouter;
