import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from './ProductsScreen';
import ShoppingCartScreen from './ShoppingCartScreen';

const Stack = createStackNavigator();
export const SHOPPING_CART_SCREEN = 'ShoppingCart' as never;
export const PRODUCTS_SCREEN = 'Products' as never;

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={PRODUCTS_SCREEN} component={ProductsScreen} />
      <Stack.Screen
        name={SHOPPING_CART_SCREEN}
        component={ShoppingCartScreen}
      />
    </Stack.Navigator>
  );
};

export default Main;
