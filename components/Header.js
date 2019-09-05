import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#292929',
    fontSize: 18
  }
})

export default Header
