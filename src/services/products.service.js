import * as productModel from '../model/products.model.js';

export const getAllProducts = async () => {
  return productModel.getAllProducts();
};

export const getProductById = async (id) => {
    return productModel.getProductById(id);
};

export const createProduct = async (product) => {
    return productModel.createProduct(product);
};

export const deleteProduct = async (id) => {
    return productModel.deleteProduct(id);
};

export const updateProduct = async (id, product) => {
    return productModel.updateProduct(id, product);
}