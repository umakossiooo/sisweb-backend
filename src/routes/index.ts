import { Router, Request, Response } from 'express';
import productRouter from './productRoutes';

const apiRouter: Router = Router();

apiRouter.use('/products', productRouter);

apiRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello typescript");
});

export default apiRouter;