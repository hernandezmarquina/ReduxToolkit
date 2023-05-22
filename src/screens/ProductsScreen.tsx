import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import {IProduct} from '../store/reducers/shoppingcartReducer';
import ProductView from '../components/ProductView';
import {useAppDispatch} from '../store';
import {addProduct} from '../store/actions/shoppingcartActions';

const products: IProduct[] = [
  {
    id: 17283,
    title: 'Polo de piqué de algodón para hombre, ajuste regular',
    price: '$219',
    image: require('../../assets/product1.jpg'),
  },
  {
    id: 82637,
    title: 'Lentes de sol ONE para hombre y mujer',
    price: '$359.55',
    image: require('../../assets/product2.jpg'),
  },
  {
    id: 20785,
    title:
      'Juego de sábanas de microfibra ligera y súper suave de fácil cuidado con bolsillos de 14 pulgadas de profundidad, tamaño matrimonial, azul marino',
    price: '$419',
    image: require('../../assets/product3.jpg'),
  },
];

const ProductsScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Header displayCart title={'Productos'} />
      {products.map(item => (
        <View key={item.id} style={styles.item}>
          <ProductView {...item} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(addProduct(item))}>
            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#f9f9f1',
    borderRadius: 10,
    margin: 16,
  },
  button: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    alignSelf: 'flex-end',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
