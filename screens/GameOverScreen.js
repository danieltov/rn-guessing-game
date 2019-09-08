import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>The number was: {props.userNum}</Text>
      <Text>Computer guessed in: {props.guesses} rounds</Text>
      <Button onPress={props.onNewGame} title='Play Again?' />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GameOverScreen
