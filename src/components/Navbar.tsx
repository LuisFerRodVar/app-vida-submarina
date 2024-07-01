import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

export default function Navbar() {
  return (
    <View>
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
  )
}
