import {createAction} from '@reduxjs/toolkit';
import {IProduct} from '../reducers/shoppingcartReducer';

export const addProduct = createAction<IProduct>('shoppingcart/add-product');
export const removeProduct = createAction<number>(
  'shoppingcart/remove-product',
);
