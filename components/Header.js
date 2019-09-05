import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const Header = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{props.title}</Text>
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
    color: Colors.light,
    fontSize: 18
  }
})

export default Header
