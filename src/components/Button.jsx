import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const Button = ({ width, height, title, onPress, bgColor, foreColor, fontsize }) => {
  return (
    <TouchableOpacity style={{
      height: height, width: width,
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      marginVertical: 10
    }}
      onPress={onPress}
    >
      <Text style={{ color: foreColor, fontWeight: '600', fontSize: fontsize }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})