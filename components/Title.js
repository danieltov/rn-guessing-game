import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = props => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'operator-mono-bold',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default Title
