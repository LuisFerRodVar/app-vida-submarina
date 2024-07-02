import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { login } from '../api/users'
import { NavigationProp } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<any, any>
}
export default function Login({navigation}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    login(username, password).then(data => {
      if (data == null) {
        alert('Error al iniciar sesión');
      }
      else {
        alert('Sesión iniciada');
        navigation.navigate('Home');
      }
    });
  }

  return (
    <View>
      <Text style={Styles.title}>Vida Submarina</Text>
      <Text style={Styles.subtitle}>Iniciar sesión</Text>
      <TextInput placeholder='Correo electrónico' onChangeText={setUsername} />
      <TextInput placeholder='Contraseña' onChangeText={setPassword} />
      <TouchableOpacity onPress={handleLogin}>
        <Text>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  )
}
const Styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  }
  
})
