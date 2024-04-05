import { Image, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'

const LoginScreen = () => {
  const navigation = useNavigation()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')



  useEffect(() => {
    const checkLoginStatus = async () => {
      try {

        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.navigate('Home')
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLoginStatus();
  }, []);


  const handleLogin = () => {

    const user = {
      email: emailAddress,
      password: password,
    };

    axios.post("http://192.168.165.176:3000/login", user).then((response) => {
      console.log(response)
      const token = response.data.token;
      console.log("token", token)
      AsyncStorage.setItem("authToken", token);
      navigation.navigate('Home')

    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ position: 'relative', height: 350, }}>
        <View style={{ height: 400, width: 400, backgroundColor: '#F2994A', borderRadius: 200, marginTop: -70, marginLeft: -180, position: 'absolute' }} />

        <View style={{ height: 400, width: 400, backgroundColor: '#272341', borderRadius: 200, marginTop: -170, marginLeft: 100, position: 'absolute', justifyContent: 'center', alignItems: 'center' }} >
          <Text style={{ color: 'white', position: 'absolute', zIndex: 2, fontSize: 20 }}>To-Do App</Text>
        </View>


        <Image source={require('../../assets/loginIcon.png')} style={{ height: 70, width: 70, position: 'absolute', top: 170, left: 160 }} />
      </View>
      <Text style={{ marginLeft: 25, color: 'black', fontWeight: 'bold', fontSize: 18 }}>Email</Text>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextField width={'90%'} placeholder={'Enter Email Address'}
          onChangeText={(text) => setEmailAddress(text)} value={emailAddress} height={50} />
      </View>

      <Text style={{ marginLeft: 25, color: 'black', fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>Password</Text>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <TextField width={'90%'} placeholder={'Enter Password'} secureTextEntry value={password} onChangeText={(text) => setPassword(text)} height={50} />
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
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 20 }}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 50, paddingHorizontal: 25, marginTop: 10 }}>
        <Pressable
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{ color: 'blue', fontWeight: 'bold' }}>Not Registered? Sign up here</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={{ fontWeight: 'bold' }}>Sign Up ?</Text>
        </Pressable>

      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})