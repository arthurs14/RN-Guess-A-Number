import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const GameOverScreen = ({ rounds, userNumber }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>{`Number of Rounds: ${rounds}`}</Text>
      <Text>{`Number was: ${userNumber}`}</Text>
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
