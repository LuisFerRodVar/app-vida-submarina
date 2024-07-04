
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { NavigationProp } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { modify } from '../api/users'

type Props = {
  navigation: NavigationProp<any, any>
}

export default function Configurations({ navigation }: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          const userData = JSON.parse(user);
          setUsername(userData.username);
          setEmail(userData.email);
          setEmail2(userData.email_2);
          setPassword(userData.password);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []); // Dependencias vacías para ejecutar solo una vez al montar el componente

  const handleSave = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        await modify(userData._id, username, email, email2, password);
        alert('Cambios guardados');
      }
    } catch (error) {
      console.error('Error saving user:', error);
    }
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput 
            style={styles.input} 
            placeholder='Nombre de usuario' 
            value={username} 
            onChangeText={setUsername} 
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            placeholder='name@domain.com' 
            value={email} 
            onChangeText={setEmail} 
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email 2</Text>
          <TextInput 
            style={styles.input} 
            placeholder='name@domain.com' 
            value={email2}
            onChangeText={setEmail2}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput 
            style={styles.input} 
            placeholder='********' 
            secureTextEntry 
            value={password} 
            onChangeText={setPassword}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Guardar cambios</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
      <Navbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  button: {
    padding: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16
  }
})

