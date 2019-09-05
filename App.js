import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'

export default function App() {
  const [userNum, setUserNum] = useState()

  const startGameHandler = selectedNum => setUserNum(selectedNum)

  return (
    <View style={styles.App}>
      <Header title='Guess a Number' />
      {userNum ? (
        <GameScreen userChoice={userNum} />
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    flex: 1
  }
})
