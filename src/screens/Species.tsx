
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import { getSpecies } from '../api/species';

interface SpeciesItem {
  name: string;
  description: string;
  thumbnail: string;
  group: number;
}

export default function Species() {
  const [currentFamily, setCurrentFamily] = useState<number | null>(null);
  const [species, setSpecies] = useState<SpeciesItem[]>([]);
  const [filteredSpecies, setFilteredSpecies] = useState<SpeciesItem[]>([]);

  useEffect(() => {
    const fetchSpecies = async () => {
      try {
        const fetchedSpecies = await getSpecies();
        setSpecies(fetchedSpecies);
      } catch (error) {
        console.error('Error fetching species:', error);
      }
    };

    fetchSpecies();
  }, []);

  const toggleFamily = (index: number) => {
    setCurrentFamily(index);
    setFilteredSpecies(species.filter((specie) => specie.group === currentFamily))
  };

   

  return (
    <View style={Styles.background}>
      <View style={Styles.families}>
        <TouchableOpacity onPress={() => toggleFamily(0)}>
          <Text style={[Styles.family, currentFamily === 0 && Styles.currentFamily]}>
            Mamíferos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFamily(1)}>
          <Text style={[Styles.family, currentFamily === 1 && Styles.currentFamily]}>
            Peces e invertebrados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFamily(2)}>
          <Text style={[Styles.family, currentFamily === 2 && Styles.currentFamily]}>
            Reptiles
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredSpecies.map((specie, index) => (
          <View key={index}>
            <Text>{specie.name}</Text>
            <Text>{specie.description}</Text>
            <Text>{specie.thumbnail}</Text>
            <Text>{specie.group}</Text>
          </View>
        ))}
      </ScrollView>
      <Navbar />
    </View>
  );
}

const Styles = StyleSheet.create({
  families: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  family: {
    fontSize: 13,
    color: '#00000040',
  },
  currentFamily: {
    color: "#0276FF"
  },
  background: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

