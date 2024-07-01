import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <MaterialIcons name='home' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='newspaper' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='waves' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='savings' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name='menu' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    height: '95%',
    bottom: 0,
    left: 0,
    right: 0,
  },

})
