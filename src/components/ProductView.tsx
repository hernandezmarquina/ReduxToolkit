import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IProduct} from '../store/actions/shoppingcartActions';

const ProductView = (props: IProduct) => {
  return (
    <View style={styles.container}>
      <Image resizeMode={'contain'} style={styles.image} source={props.image} />
      <View style={{flex: 1}}>
        <Text style={[styles.light, styles.id]}>{props.id}</Text>
        <Text numberOfLines={3} style={styles.title}>
          {props.title}
        </Text>
        <Text style={styles.light}>{props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    minHeight: 120,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  light: {
    fontWeight: '300',
  },
  id: {
    fontSize: 10,
  },
  image: {
    height: 60,
    width: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 16,
    alignSelf: 'center',
  },
});

export default ProductView;
