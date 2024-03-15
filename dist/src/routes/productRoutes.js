"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get('/getallproducts', (req, res) => {
    res.send("Get a list of products");
});
productRouter.get('/getproduct/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Get a list of products ${id}`);
});
productRouter.post('/createproduct', (req, res) => {
    let id = req.body.id;
    let title = req.body.title;
    let price = req.body.price;
    res.send(`Create product ${id} - ${title} - ${price}`);
});
productRouter.delete('/deleteproduct', (req, res) => {
    let id = req.body.id;
    res.send(`Delete product ${id}`);
});
productRouter.patch('/updateproduct/:id', (req, res) => {
    let id = req.body.id;
    res.send(`Update product ${id}`);
});
exports.default = productRouter;
