import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProductsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Products screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default ProductsScreen;
