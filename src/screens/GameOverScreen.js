import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ rounds, userNumber, restart }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Game Over!</Text>
      <Text style={styles.text}>{`Number of Rounds: ${rounds}`}</Text>
      <Text style={styles.text}>{`Number was: ${userNumber}`}</Text>
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
  text: {
    fontFamily: 'OpenSans-Regular',
  },
  button: {
    marginTop: 10,
  },
});

export default GameOverScreen;
