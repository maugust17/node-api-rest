import * as productsService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    res.status(200).json(await productsService.getAllProducts());
};

export const getProductById = async (req, res) => {
  const id = req.params.id;
  const product = await productsService.getProductById(id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
};

export const createProduct = async (req, res) => {
    const product = req.body;
    const newProductId = await productsService.createProduct(product);
    res.status(201).json({ message: 'Producto creado correctamente', id: newProductId });
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await productsService.deleteProduct(id);
    res.status(200).json({ message: 'Producto eliminado correctamente' });
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const product = req.body;
    const updatedProduct = await productsService.updateProduct(id, product);
    res.status(200).json({ message: 'Producto actualizado correctamente', product: updatedProduct });
};