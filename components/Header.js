import React from 'react'
import { View, StyleSheet } from 'react-native'
import Title from './Title'
import Colors from '../constants/colors'

const Header = props => {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>{props.title}</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: Colors.light
  }
})

export default Header
