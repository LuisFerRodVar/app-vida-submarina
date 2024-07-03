
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any, any>
}

export default function RecoveryAux({ navigation }: Props) {
  return (
    <ImageBackground source={require('../../assets/background.jpeg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Vida Submarina</Text>
        <Text style={styles.subtitle}>Recupera tu cuenta</Text>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <View style={styles.messageContainer}>
          <Text style={styles.text}>
            Datos enviados al correo de recuperación registrado correctamente. Por favor revisar su correo y seguir las instrucciones para acceder a la cuenta.
          </Text>
          <MaterialIcons name='check' size={24} color='#0277BD' />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Continuar</Text>
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
  messageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#0277BD',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

