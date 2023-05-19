import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Main from './src/screens';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
