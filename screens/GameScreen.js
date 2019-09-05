import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { NumberContainer, Card } from '../components'

const generateNumBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const guess = Math.floor(Math.random() * (max - min) + min)
  return guess === exclude ? generateNumBetween(min, max, exclude) : guess
}

const GameScreen = props => {
  const [generatedNum, setGeneratedNum] = useState(
    generateNumBetween(1, 100, props.userChoice)
  )

  return (
    <View style={styles.screen}>
      <Text>Computer's Guess</Text>
      <NumberContainer>{generatedNum}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={() => {}} />
        <Button title='HIGHER' onPress={() => {}} />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

export default GameScreen
