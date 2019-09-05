import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
    <View>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  style
})

export default GameScreen
