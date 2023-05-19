import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ShoppingCartScreen screen</Text>
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

export default ShoppingCartScreen;
