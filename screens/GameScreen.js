import React, { useState, useRef, useEffect } from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import { NumberContainer, Card } from '../components'
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
      <Text style={styles.title}>Game Started!</Text>
      <Card style={styles.container}>
        <Text style={styles.confirmBoxText}>Computer's Guess:</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <Button
            title='LOWER'
            onPress={nextGuessHandler.bind(this, 'lower')}
          />
          <Button
            title='HIGHER'
            onPress={nextGuessHandler.bind(this, 'higher')}
          />
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
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
