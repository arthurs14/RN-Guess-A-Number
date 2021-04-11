import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const GameOverScreen = ({ rounds, userNumber, restart }) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Done!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // use for local images
          // source={require('../assets/success.png')}
          source={{
            uri:
              'https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/istockphoto-485966046-612x612.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
