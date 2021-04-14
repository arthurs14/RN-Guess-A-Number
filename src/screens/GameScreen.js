import React, { useState, useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Icon from 'react-native-vector-icons/Ionicons';

const generateNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateNumber(min, max, exclude);
  } else {
    return randomNum;
  }
};

const renderListItem = (value, round) => (
  <View key={value} style={styles.listItem}>
    <BodyText>{`# ${round}`}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateNumber(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  // does not re-render
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  // similar to componentDidMount?
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver, pastGuesses]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    // Checks to set new boundary to guess
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      // one higher than last guess
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );

    setCurrentGuess(nextNumber);
    // setRounds(curRounds => curRounds + 1);
    setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler('lower')}>
          <Icon name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuessHandler('greater')}>
          <Icon name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index),
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 400,
    maxWidth: '90%',
  },
  list: {
    width: '80%',
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default GameScreen;
