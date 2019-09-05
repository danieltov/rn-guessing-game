import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const NumberContainer = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: Colors.light,
    borderRadius: 20,
    borderWidth: 3,
    marginVertical: 10,
    padding: 10,
    width: '80%'
  },
  number: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.light
  }
})

export default NumberContainer
