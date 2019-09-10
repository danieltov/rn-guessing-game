import React, { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
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

const renderListItem = (listLen, item) => {
  return (
    <View key={item.index} style={styles.listItem}>
      <BodyText style={styles.listText}>
        Round No.{listLen - item.index}:
      </BodyText>
      <BodyText style={styles.listText}>{item.item}</BodyText>
    </View>
  )
}

const GameScreen = props => {
  const { userChoice, onGameOver } = props
  const firstGuess = generateNumBetween(1, 100, userChoice)
  const [currentGuess, setCurrentGuess] = useState(firstGuess)

  const [pastGuesses, setPastGuesses] = useState([firstGuess.toString()])

  const currentMin = useRef(1)
  const currentMax = useRef(100)
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length)
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
      : (currentMin.current = currentGuess + 1)

    const nextGuess = generateNumBetween(
      currentMin.current,
      currentMax.current,
      currentGuess
    )

    setCurrentGuess(nextGuess)
    setPastGuesses(pastGuesses => [nextGuess.toString(), ...pastGuesses])
  }

  return (
    <View style={styles.screen}>
      <Title>Game Started!</Title>
      <Card style={styles.container}>
        <BodyText style={styles.confirmBoxText}>Computer's Guess:</BodyText>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
            <Ionicons name='ios-remove' size={30} />
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
            <Ionicons name='ios-add' size={30} />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={pastGuesses}
          keyExtractor={item => item}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
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
  },
  listContainer: {
    width: '80%',
    flex: 1
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  listItem: {
    borderBottomWidth: 5,
    borderBottomColor: Colors.dark,
    backgroundColor: Colors.primary,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%'
  },
  listText: {
    color: Colors.light
  }
})

export default GameScreen
