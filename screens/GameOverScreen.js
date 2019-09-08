import React from 'react'
import { View, StyleSheet, Button, Image } from 'react-native'
import { BodyText, Title } from '../components'

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
      <BodyText>The number was: {props.userNum}</BodyText>
      <BodyText>Computer guessed in: {props.guesses} rounds</BodyText>
      <Button onPress={props.onNewGame} title='Play Again?' />
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
  image: {
    width: '100%',
    height: '100%'
  }
})

export default GameOverScreen
