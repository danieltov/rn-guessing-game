import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    elevation: 8,
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
})

export default Card
