import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { BodyText, Title, MainButton } from '../components'
import Colors from '../constants/colors'
const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.jpeg')}
          // source={{
          //   uri:
          //     'https://images.unsplash.com/photo-1551892589-865f69869476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9'
          // }}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your number was <Text style={styles.highlight}>{props.userNum}</Text>.
          Siri guessed it in{' '}
          <Text style={styles.highlight}>{props.guesses}</Text> tries.
        </BodyText>
      </View>
      <MainButton
        onPress={props.onNewGame}
        color={Colors.primary}
        style={{ fontSize: 20, marginTop: 10 }}>
        Play Again?
      </MainButton>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 50,
    overflow: 'hidden',
    marginVertical: 10
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultText: {
    textAlign: 'center',
    fontSize: 18
  },
  highlight: {
    fontFamily: 'operator-mono-bold',
    color: Colors.primary
  }
})

export default GameOverScreen
