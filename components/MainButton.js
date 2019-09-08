import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'

const MainButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
      <View
        style={{
          ...styles.button,
          backgroundColor: props.color,
          ...props.style
        }}>
        <Text style={{ ...styles.buttonText, ...props.textStyles }}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 12,
    width: '100%'
  },
  buttonText: {
    color: Colors.light,
    fontFamily: 'operator-mono-bold',
    fontSize: 16,
    textAlign: 'center'
  }
})

export default MainButton
