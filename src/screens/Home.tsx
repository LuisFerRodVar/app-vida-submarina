
import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { StyleSheet } from 'react-native';

export default function Home() {
  const [current, setCurrent] = useState(0);
  const images = [
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.carouselContainer}>
          <Image style={styles.image} source={images[current]} />
          <View style={styles.dots}>
            {images.map((_, index) => (
              <View key={index} style={current === index ? styles.currentDot : styles.dot} />
            ))}
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Datos sorprendentes</Text>
          <Text style={styles.text}>
            El océano contiene más artefactos históricos que todos los museos del mundo combinados.
          </Text>
          <Text style={styles.text}>
            ¿Sabías que Las tortugas marinas pueden contener la respiración bajo el agua durante más de cinco horas gracias a su lento metabolismo y su capacidad para absorber oxígeno a través de la piel?
          </Text>
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  image: {
    margin: 'auto',
    marginTop: 30,
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
    margin: 8,
    borderRadius: 5,
  },
  currentDot: {
    height: 10,
    width: 10,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 5,
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  navbar: {
    backgroundColor: '#000',
  }
});

