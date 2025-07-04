import express from 'express';
import * as productsController from "../controllers/products.controller.js";
const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', productsController.getProductById);
router.post('/products', productsController.createProduct);
router.delete('/products/:id', productsController.deleteProduct);
router.put('/products/:id', productsController.updateProduct);

export default router;
