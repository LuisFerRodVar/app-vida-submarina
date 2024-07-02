import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Navbar() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialIcons name='home' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("News")} >
          <MaterialIcons name='newspaper' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Species")} >
          <MaterialIcons name='waves' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Donations")} >
          <MaterialIcons name='savings' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Configurations")} >
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
