import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { login } from '../api/users'
export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    login(username, password).then(data => {
      alert(data);
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
