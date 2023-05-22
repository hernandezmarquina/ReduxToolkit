import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Header displayCart title={'Productos'} />
      <Text>Products screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ProductsScreen;
