import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header'
import { StartGameScreen, GameScreen, GameOverScreen } from './screens'

const fetchFonts = () => {
  Font.loadAsync({
    'operator-mono': require('./assets/fonts/OperatorMono-Book.otf'),
    'operator-mono-bold': require('./assets/fonts/OperatorMono-Bold.otf'),
    'operator-mono-italic': require('./assets/fonts/OperatorMono-BookItalic.otf')
  })
}

export default function App() {
  const [userNum, setUserNum] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded)
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={error => console.log(error)}
      />
    )

  const startGameHandler = selectedNum => {
    setUserNum(selectedNum)
  }
  const gameOverHandler = numOfRounds => setGuessRounds(numOfRounds)

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNum(null)
  }

  return (
    <View style={styles.App}>
      <Header title='Guess a Number' />
      {userNum && guessRounds <= 0 ? (
        <GameScreen userChoice={userNum} onGameOver={gameOverHandler} />
      ) : guessRounds > 0 ? (
        <GameOverScreen
          userNum={userNum}
          guesses={guessRounds}
          onNewGame={newGameHandler}
        />
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
