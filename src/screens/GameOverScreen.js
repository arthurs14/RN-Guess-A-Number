import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = ({ rounds, userNumber, restart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <Image source={require('../assets/success.png')} />
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
