import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

const App = () => {
  const [number, setNumber] = useState();

  const startGame = selectedNum => {
    setNumber(selectedNum);
  };

  let content = <StartGameScreen startGame={startGame} />;

  if (number) {
    content = <GameScreen userChoice={number} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Numbers" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
