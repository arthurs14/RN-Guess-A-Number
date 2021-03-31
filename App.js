import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header title="Numbers" />
      <StartGameScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
