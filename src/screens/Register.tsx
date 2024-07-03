
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
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
    if(username == '' || password == '' || email == ''){
      alert('Por favor llene todos los campos');
      return;
    }
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
    <ImageBackground source={require('../../assets/background.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Vida Submarina</Text>
        <Text style={styles.subtitle}>Crear cuenta</Text>
        <Image style={styles.logo} source={require("../../assets/logo.png")} /> 
        <Text style={styles.text}>Digite un nombre de usuario</Text>
        <TextInput style={styles.input} placeholder="Usuario" onChangeText={setUsername} />
        <Text style={styles.text}>Digite una contraseña</Text>
        <TextInput style={styles.input} placeholder="**********" secureTextEntry={true} onChangeText={setPassword} />
        <Text style={styles.text}>Digite un correo</Text>
        <TextInput style={styles.input} placeholder="email@domain.com" keyboardType='email-address' onChangeText={setEmail} />
        <TouchableOpacity style={styles.button} onPress={() => registerUser()}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo semi-transparente blanco
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 20,
    alignSelf: 'center',
  },
  text: {
    paddingLeft: 20,
    color: '#828282',
    paddingVertical: 5,
  },
  input: {
    width: '93%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#0277BD',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '93%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});


