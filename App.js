import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import Header from './components/Header'
import { StartGameScreen, GameScreen, GameOverScreen } from './screens'

export default function App() {
  const [userNum, setUserNum] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const startGameHandler = selectedNum => {
    setUserNum(selectedNum)
    setGuessRounds(0)
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
