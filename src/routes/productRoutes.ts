import { Router, Request, Response } from 'express';

const productRouter: Router = Router();

productRouter.get('/getallproducts', (req: Request, res: Response) => {
    res.send("Get a list of products");
});

productRouter.get('/getproduct/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    res.send(`Get a list of products ${id}`);
});

productRouter.post('/createproduct', (req: Request, res: Response) => {
    let id = req.body.id;
    let title = req.body.title;
    let price = req.body.price;
    res.send(`Create product ${id} - ${title} - ${price}`);
});

productRouter.delete('/deleteproduct', (req: Request, res: Response) => {
    let id = req.body.id;
    res.send(`Delete product ${id}`);
});

productRouter.patch('/updateproduct/:id', (req: Request, res: Response) => {
    let id = req.body.id;
    res.send(`Update product ${id}`);
});

export default productRouter;