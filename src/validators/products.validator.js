import {body} from 'express-validator'

export const createProductValidator = [
  body('name', 'Name is required').not().isEmpty(),
]