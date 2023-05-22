import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SHOPPING_CART_SCREEN} from '../screens';
import {useAppDispatch, useAppSelector} from '../store';

interface IHeaderProps {
  title: string;
  displayCart?: boolean;
}

const Header = (props: IHeaderProps) => {
  const navigation = useNavigation();
  const useSelector = useAppSelector(state => state.shoppingcart);
  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.backButton}
            source={require('../../assets/ic_back_button.png')}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{props.title}</Text>
      {props.displayCart && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(SHOPPING_CART_SCREEN);
          }}>
          <Image
            style={styles.button}
            source={require('../../assets/ic_shopping_cart.png')}
          />
        </TouchableOpacity>
      )}
      {useSelector.totalProductos > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>1</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#537188',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    height: 32,
    width: 32,
  },
  backButton: {
    height: 24,
    width: 24,
    marginRight: 16,
  },
  badge: {
    position: 'absolute',
    top: 6,
    right: 12,
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
  },
});

export default Header;
