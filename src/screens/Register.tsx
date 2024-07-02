import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { register } from '../api/users';
import { NavigationProp } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<any, any>
}
export default function Register({navigation}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  function registerUser(){
    register(username, password, email)
    .then((response) => {
      alert('Usuario creado');
    })
    .catch((error) => {
      alert('Error al crear usuario');
    })
    navigation.navigate('Login');
  }

  return (
    <View>
      <Text>Vida Submarina</Text>
      <Text>Crear cuenta</Text>
      <Image style={styles.logo} source={require("../../assets/logo.png")} /> 
      <Text>
        Digite un nombre de usuario
      </Text>
      <TextInput placeholder="usuario" onChangeText={setUsername} />
      <Text>
        Digite una contraseña
      </Text>
      <TextInput placeholder="**********" keyboardType='visible-password' onChangeText={setPassword} />
      <Text>
        Digite un correo
      </Text>
      <TextInput placeholder="email@domain.com" keyboardType='email-address' onChangeText={setEmail} />
      <TouchableOpacity onPress={() => registerUser()}>
        <Text>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
  }
  })
