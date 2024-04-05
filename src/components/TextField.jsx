import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const TextField = ({ icon, placeholder, width, height, inputWidth = '90%', backgroundColor = 'white', ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{
      height: height,
      width: width,
      alignItems: 'center',
      flexDirection: 'row',
      padding: 3,
      backgroundColor: backgroundColor, gap: 5, borderWidth: focused ? 1 : 0.5, borderColor: focused ? 'blue' : 'grey',
      borderRadius: 10,
      marginVertical: 5
    }}>
      {/* <Image source={icon} style={{ height: 30, width: 30, marginLeft: 10 }} /> */}
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ fontWeight: '500', color: 'black' }} // Set text color to black
        placeholder={placeholder} width={inputWidth} placeholderTextColor={'black'} {...otherProps} />
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({})
