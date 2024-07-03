import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import { NavigationProp } from '@react-navigation/native'

type Props = {
  navigation: NavigationProp<any, any>
}

export default function Configurations({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput style={styles.input} placeholder='Nombre de usuario' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder='name@domain.com' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Email 2</Text>
          <TextInput style={styles.input} placeholder='name@domain.com' />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.input} placeholder='********' secureTextEntry />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
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
    marginTop: 16,
    marginBottom: 100,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 16
  }
})

