import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ rounds, userNumber, restart }) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>{`Number of Rounds: ${rounds}`}</Text>
      <Text>{`Number was: ${userNumber}`}</Text>
      <Button title="Play Again" onPress={restart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
