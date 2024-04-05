import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'
import { useNavigation } from '@react-navigation/native'

import axios from 'axios';
const RegisterScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    try {
      const user = {
        name: name,
        email: emailAddress,
        password: password
      }

      console.log(user);
      const response = await axios.post("http://192.168.165.176:3000/register", user);
      console.log(response);
      Alert.alert("Registration successful", "You have been registered successfully");
      setEmailAddress("");
      setPassword("");
      setName("");
    } catch (error) {

      console.log("error", error)
    }
  }


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ position: 'relative', height: 350, }}>
        <View style={{ height: 400, width: 400, backgroundColor: '#F2994A', borderRadius: 200, marginTop: -70, marginLeft: -180, position: 'absolute' }} />

        <View style={{ height: 400, width: 400, backgroundColor: '#272341', borderRadius: 200, marginTop: -170, marginLeft: 100, position: 'absolute', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white', position: 'absolute', zIndex: 2, fontSize: 20 }}>To-Do App</Text>
        </View>


        <Image source={require('../../assets/loginIcon.png')} style={{ height: 70, width: 70, position: 'absolute', top: 170, left: 160 }} />
      </View>

      <Text style={{ marginLeft: 25, color: 'black', fontWeight: 'bold', fontSize: 18 }}>Name</Text>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextField width={'90%'} placeholder={'Enter Your name'}
          onChangeText={(text) => setName(text)} value={name}
          height={50} />
      </View>
      <Text style={{ marginLeft: 25, color: 'black', fontWeight: 'bold', fontSize: 18 }}>Email </Text>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextField width={'90%'} placeholder={'Enter Your name'}
          onChangeText={(text) => setEmailAddress(text)} value={emailAddress}
          height={50} />
      </View>



      <Text style={{ marginLeft: 25, color: 'black', fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Password</Text>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextField width={'90%'} placeholder={'Enter Password'} value={password} onChangeText={(text) => setPassword(text)} height={50} secureTextEntry />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ marginLeft: 25, color: 'black', fontWeight: '500', marginVertical: 5 }}>Remeber Me</Text>

      </View>

      <TouchableOpacity style={{
        height: 50, width: '90%',
        backgroundColor: '#4FB59C',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center'
      }}
        onPress={handleRegister}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Register</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 50, paddingHorizontal: 25, marginTop: 10 }}>
        <Pressable onPress={() => navigation.navigate('Login')} >
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Already Registerd! Login Here</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')} >
          <Text style={{ fontWeight: 'bold' }}>Sign Up ?</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})