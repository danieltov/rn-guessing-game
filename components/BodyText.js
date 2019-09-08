import React from 'react'
import { Text, StyleSheet } from 'react-native'

const BodyText = props => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'operator-mono',
    fontSize: 16
  }
})

export default BodyText
