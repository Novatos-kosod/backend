import { Router } from "express";
import { login } from "./controllers/login.controller.js";
import { getProducts,createProduct,deleteProduct } from "./controllers/products.controller.js";

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World! welcome to our API');
}
);

router.post('/login', login);

router.get('/products', getProducts);
router.post('/product', createProduct);
router.delete('/product/:productId', deleteProduct);