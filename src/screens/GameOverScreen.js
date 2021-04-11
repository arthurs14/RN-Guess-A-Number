import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import BodyText from '../components/BodyText';

const GameOverScreen = ({ rounds, userNumber, restart }) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over!</BodyText>
      <BodyText>{`Number of Rounds: ${rounds}`}</BodyText>
      <BodyText>{`Number was: ${userNumber}`}</BodyText>
      <View style={styles.button}>
        <Button title="Play Again" onPress={restart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
  },
});

export default GameOverScreen;
