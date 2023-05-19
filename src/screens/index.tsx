import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from './ProductsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';

const Stack = createStackNavigator();
export const SHOPPING_CART_SCREEN = 'ShoppingCart';
export const PRODUCTS_SCREEN = 'Products';

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={PRODUCTS_SCREEN} component={ProductsScreen} />
      <Stack.Screen
        name={SHOPPING_CART_SCREEN}
        component={ShoppingCartScreen}
      />
    </Stack.Navigator>
  );
};

export default Main;
