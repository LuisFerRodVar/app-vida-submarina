import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import Navbar from '../components/Navbar';
import { getNews } from '../api/news';
import { StyleSheet } from 'react-native';

interface NewsItem {
  title: string;
  content: string;
  thumbnail: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await getNews();
        setNews(fetchedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TextInput placeholder="Buscar" style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }} />
      <ScrollView>
        {news.map((item, index) => (
          <View key={index} style={{ margin: 10 , padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.content}</Text>
            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
            
          </View>
        ))}
      </ScrollView>
      <Navbar />
    </View>
  );
}
const styles = StyleSheet.create({
  thumbnail: {
    width: '98%',
    height: 150,
    borderRadius: 10,
  },
  
});

