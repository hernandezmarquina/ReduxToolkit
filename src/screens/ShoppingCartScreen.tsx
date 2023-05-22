import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import ProductView from '../components/ProductView';
import {useAppDispatch, useAppSelector} from '../store';
import {removeProduct} from '../store/actions/shoppingcartActions';

const ShoppingCartScreen = () => {
  const useSelector = useAppSelector(state => state.shoppingcart);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Header displayBackButton title={'Carrito'} />
      <ScrollView style={{flex: 1}}>
        {useSelector.products.map((item, i) => (
          <View key={`${item.id}&${i}`} style={styles.item}>
            <ProductView {...item} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => dispatch(removeProduct(i))}>
              <Text style={styles.buttonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal: 24,
    alignSelf: 'flex-end',
    backgroundColor: '#cc0000',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ShoppingCartScreen;
