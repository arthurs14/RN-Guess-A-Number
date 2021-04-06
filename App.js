import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';

const App = () => {
  const [number, setNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const startGame = selectedNum => {
    setNumber(selectedNum);
    setRounds(0);
  };

  const gameOver = numOfRounds => {
    setRounds(numOfRounds);
  };

  let content = <StartGameScreen startGame={startGame} />;

  if (number && rounds <= 0) {
    content = <GameScreen userChoice={number} onGameOver={gameOver} />;
  } else if (rounds > 0) {
    content = <GameOverScreen />;
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
