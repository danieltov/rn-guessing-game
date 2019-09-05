import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

export default function App() {
  return (
    <View style={styles.App}>
      <Header title='Guess a Number' />
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  App: {
    flex: 1
  }
})
