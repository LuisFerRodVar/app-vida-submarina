import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbarContainer: {
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
});

export default function Navbar() {
  const [currentDir, setCurrrentDir] = useState('Home');
  const navigation = useNavigation();

  const toggleDir = (dir: string) => {
    navigation.navigate(dir);
    setCurrrentDir(dir);
  }
  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => toggleDir('Home')}>
          <MaterialIcons name='home' size={24} color='#0277BD' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDir('News')} >
          <MaterialIcons name='newspaper' size={24} color='#0277BD' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDir('Species')} >
          <MaterialIcons name='waves' size={24} color='#0277BD' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDir('Donations')} >
          <MaterialIcons name='savings' size={24} color='#0277BD' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleDir('Configurations')} >
          <MaterialIcons name='menu' size={24} color='#0277BD' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

