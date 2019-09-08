import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import {
  NumberContainer,
  Card,
  BodyText,
  Title,
  MainButton
} from '../components'
import Colors from '../constants/colors'

const generateNumBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const guess = Math.floor(Math.random() * (max - min) + min)
  return guess === exclude ? generateNumBetween(min, max, exclude) : guess
}

const GameScreen = props => {
  const { userChoice, onGameOver } = props

  const [currentGuess, setCurrentGuess] = useState(
    generateNumBetween(1, 100, userChoice)
  )

  const [rounds, setRounds] = useState(0)

  const currentMin = useRef(1)
  const currentMax = useRef(100)

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver])

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'higher' && currentGuess > userChoice)
    ) {
      Alert.alert(`Don't lie!`, 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel'
        }
      ])
      return
    }

    direction === 'lower'
      ? (currentMax.current = currentGuess)
      : (currentMin.current = currentGuess)

    const nextGuess = generateNumBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    )

    setCurrentGuess(nextGuess)
    setRounds(currentRounds => currentRounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Title>Game Started!</Title>
      <Card style={styles.container}>
        <BodyText style={styles.confirmBoxText}>Computer's Guess:</BodyText>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
            LOWER
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
            HIGHER
          </MainButton>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  container: {
    backgroundColor: Colors.warning,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%'
  }
})

export default GameScreen
