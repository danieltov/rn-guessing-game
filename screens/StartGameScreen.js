import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import Colors from '../constants/colors'

import {
  Card,
  Input,
  NumberContainer,
  BodyText,
  MainButton
} from '../components'

const StartGameScreen = props => {
  const [enteredVal, setEnteredVal] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNum, setSelectedNum] = useState(undefined)

  const numInputHandler = inputText => {
    setEnteredVal(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredVal('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    const chosenNum = parseInt(enteredVal)
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      return Alert.alert(
        'Invalid Number!',
        'Number has to be number between 1 and 99.',
        [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]
      )
    }
    setSelectedNum(chosenNum)
    setEnteredVal('')
    setConfirmed(true)
    Keyboard.dismiss()
  }

  const NewGameInput = (
    <Card style={styles.inputContainer}>
      <BodyText>Select a Number</BodyText>
      <Input
        style={styles.input}
        blurOnSubmit
        keyboardType='number-pad'
        maxLength={2}
        value={enteredVal}
        onChangeText={numInputHandler}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton color={Colors.danger} onPress={resetInputHandler}>
            Reset
          </MainButton>
        </View>
        <View style={styles.button}>
          <MainButton color={Colors.secondary} onPress={confirmInputHandler}>
            Confirm
          </MainButton>
        </View>
      </View>
    </Card>
  )

  const ConfirmOutput = (
    <Card style={{ ...styles.inputContainer, ...styles.confirmBox }}>
      <BodyText style={styles.confirmBoxText}>You chose:</BodyText>
      <NumberContainer>{selectedNum}</NumberContainer>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton
          color={Colors.warning}
          onPress={resetInputHandler}>
          Go Back
        </MainButton>
        </View>
        <View style={styles.button}>
        <MainButton
          color={Colors.primary}
          onPress={() => props.onStartGame(selectedNum)}>
          Start
        </MainButton>
        </View>
      </View>
    </Card>
  )

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}>
      <View style={styles.screen}>
        <BodyText style={styles.title}>New Game</BodyText>
        {confirmed ? ConfirmOutput : NewGameInput}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'operator-mono-bold',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '45%'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  confirmBox: {
    backgroundColor: Colors.secondary,
    marginVertical: 10
  },
  confirmBoxText: {
    color: Colors.light
  }
})

export default StartGameScreen
