import {body} from 'express-validator'

//id
//price (float)
//sku
//description
//stock
//name
//category

export const createProductValidator = [
  body('name', 'Name is required').not().isEmpty(),
  body('price', 'Price must be a number').isFloat({gt: 0}),
  body('sku', 'SKU is required').not().isEmpty(),
  body('description', 'Description is required').not().isEmpty(),
  body('stock', 'Stock must be a number').isInt({gt: -1}),
  body('category', 'Category is required').not().isEmpty(),
]

export const updateProductValidator = [
  body('name', 'Name is required').not().isEmpty(),
  body('price', 'Price must be a number').isFloat({gt: 0}),
  body('sku', 'SKU is required').not().isEmpty(),
  body('description', 'Description is required').not().isEmpty(),
  body('stock', 'Stock must be a number').isInt({gt: -1}),
  body('category', 'Category is required').not().isEmpty(),
  body().custom((_, { req }) => {
    if (!req.params.id) {
      throw new Error('ID parameter is required in URL');
    }
    if (!/^[a-zA-Z0-9_-]{20}$/.test(req.params.id)) {
      throw new Error('ID parameter in URL must be a valid Firebase ID');
    }
    return true;
  }),
]

export const deleteProductValidator = [
  body().custom((_, { req }) => {
    if (!req.params.id) {
      throw new Error('ID parameter is required in URL');
    }
    if (!/^[a-zA-Z0-9_-]{20}$/.test(req.params.id)) {
      throw new Error('ID parameter in URL must be a valid Firebase ID');
    }
    return true;
  }),
]

export const getProductByIdValidator = [
  body().custom((_, { req }) => {
    if (!req.params.id) {
      throw new Error('ID parameter is required in URL');
    }
    if (!/^[a-zA-Z0-9_-]{20}$/.test(req.params.id)) {
      throw new Error('ID parameter in URL must be a valid Firebase ID');
    }
    return true;
  }),
]