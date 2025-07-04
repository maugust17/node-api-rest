import express from 'express';
import * as productsController from "../controllers/products.controller.js";
import { getProductByIdValidator, createProductValidator, deleteProductValidator, updateProductValidator } from "../validators/products.validator.js";

const router = express.Router();

router.get('/products', productsController.getAllProducts);
router.get('/products/:id', getProductByIdValidator, productsController.getProductById);
router.post('/products', createProductValidator, productsController.createProduct);
router.delete('/products/:id',deleteProductValidator, productsController.deleteProduct);
router.put('/products/:id', updateProductValidator, productsController.updateProduct);

export default router;
