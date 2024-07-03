
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Recovery() {
  return (
    <ImageBackground source={require('../../assets/background.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Vida Submarina</Text>
        <Text style={styles.subtitle}>Recupera tu cuenta</Text>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.text}>¿A qué cuenta estás intentando ingresar?</Text>
        <TextInput style={styles.input} placeholder='email@domain.com' />
        <Text style={styles.text}>Escribe una cuenta de correo electrónico para recuperar tu cuenta</Text>
        <TextInput style={styles.input} placeholder='email@domain.com' />
        <Text style={styles.text}>Recibirás un correo con instrucciones para recuperar tu cuenta</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
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
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 125,
    height: 125,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    color: '#828282',
    paddingVertical: 5,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  button: {
    backgroundColor: '#0277BD',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

