import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { login } from '../api/users'
import { NavigationProp } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<any, any>
}
export default function Login({ navigation }: Props) {
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
    <ImageBackground source={require('../../assets/background.jpeg')} style={Styles.backgroundImage}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Vida Submarina</Text>
        <Text style={Styles.subtitle}>Iniciar sesión</Text>
        <Image style={{ width: 125, height: 125, alignSelf: 'center' }} source={require('../../assets/logo.png')} />
        <Text style={Styles.text}>Digita tu email para iniciar sesión</Text>
        <TextInput style={Styles.input}  placeholder='Correo electrónico' onChangeText={setUsername} />
        <Text style={Styles.text}>Digita tu contraseña</Text>
        <TextInput style={Styles.input} placeholder='Contraseña' onChangeText={setPassword} />
        <TouchableOpacity onPress={() => navigation.navigate('Recovery')}>
          <Text style={Styles.tiny}>¿Olvidaste tu contraseña?</Text> 
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={Styles.button}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={Styles.button}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const Styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
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
  },
  text:{
    padding: 10,
    color: '#828282',
  },
  input: {
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  tiny: {
    textAlign: 'right',
    color: '#828282'
  },
  button: {
    backgroundColor: '#0277BD',
    color: 'white',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
  }
});

