import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{...styles.button, backgroundColor: props.color}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 15
  },
  buttonText: {
    color: Colors.light,
    fontFamily: 'operator-mono-bold',
    fontSize: 16,
    textAlign: 'center',
  }
})

export default MainButton
