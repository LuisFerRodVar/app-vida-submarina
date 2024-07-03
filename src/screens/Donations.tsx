import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Navbar from '../components/Navbar';

export default function Donations() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>¿Cómo puedo ayudar?</Text>
        <Text style={styles.paragraph}>
          Donaciones Directas: Visita los sitios web de estas fundaciones y realiza una donación directa. Cada contribución, sin importar su tamaño, marca una diferencia.
          Voluntariado: Muchas de estas organizaciones ofrecen oportunidades de voluntariado. Involúcrate y ayuda directamente en proyectos de conservación.
          Educación y Difusión: Comparte información sobre la importancia de la conservación marina con tu comunidad. La conciencia es el primer paso hacia el cambio.
        </Text>
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 20,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  
});

