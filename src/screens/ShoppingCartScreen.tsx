import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={'Carrito'} />
      <Text>Shopping screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ShoppingCartScreen;
