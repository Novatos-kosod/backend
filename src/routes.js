import { Router } from "express";
import { login } from "./controllers/login.controller.js";
import { getProducts,getProductsById,createProduct,deleteProduct,updateProduct } from "./controllers/products.controller.js";
import { getSales,createSale } from "./controllers/sales.controller.js";

export const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World! welcome to our API');
}
);

router.post('/login', login);

router.get('/products', getProducts);
router.post('/product', createProduct);
router.get('/product/:productId', getProductsById);
router.patch('/product/:productId', updateProduct);
router.delete('/product/:productId', deleteProduct);

router.get('/sales', getSales);
router.post('/sale', createSale);