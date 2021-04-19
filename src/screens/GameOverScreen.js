import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../../constants/colors';

const GameOverScreen = ({ rounds, userNumber, restart }) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>Game Done!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            // use for local images
            source={require('../assets/success.png')}
            // use for web images
            // source={{
            //   uri:
            //     'https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/istockphoto-485966046-612x612.jpg',
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed <Text style={styles.highlight}>{rounds}</Text>{' '}
            rounds to guess the number{' '}
            <Text style={styles.highlight}>{userNumber}</Text>.
          </BodyText>
        </View>
        <View style={styles.button}>
          <MainButton onPress={restart}>Play Again</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  button: {
    marginTop: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.33,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
    // use either margin to width
    //width: '80%',
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
});

export default GameOverScreen;
