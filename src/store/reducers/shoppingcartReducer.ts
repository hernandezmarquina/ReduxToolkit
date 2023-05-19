import {createReducer} from '@reduxjs/toolkit';
import {addProduct, removeProduct} from '../actions/shoppingcartActions';

export interface IProduct {
  id: number;
  title: string;
}

interface IShoppingcartState {
  products: IProduct[];
  totalProductos: number;
}

const initialState: IShoppingcartState = {
  products: [],
  totalProductos: 0,
};

const appReducer = createReducer(initialState, builder => {
  builder
    .addCase(addProduct, (state, action) => {
      state.products = [...state.products, action.payload];
      state.totalProductos += 1;
    })
    .addCase(removeProduct, (state, action) => {
      let products = [...state.products].filter(
        item => item.id !== action.payload,
      );
      state.products = products;
      state.totalProductos = products.length;
    });
});

export default appReducer;