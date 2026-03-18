import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Cafe, getCoffee, getImgCoffeById } from '../services/getCoffe'
import Header from '../components/Header'

export const Home = () => {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [images, setImages] = useState<Map<number, string>>(new Map());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCafes = async () => {
      const data = await getCoffee();
      setCafes(data);
      const imagePromises = data.map(async (cafe) => {
        const imgUrl = await getImgCoffeById(cafe.id);
        return { id: cafe.id, imgUrl };
      });
      
      const imageResults = await Promise.all(imagePromises);
      const newImages = new Map(images);
      imageResults.forEach(({ id, imgUrl }) => {
        if (imgUrl) newImages.set(id, imgUrl);
      });
      setImages(newImages);
      
      setLoading(false);
    };
    loadCafes();
  }, []);

  const renderItem = ({ item }: { item: Cafe }) => {
    const imgUrl = images.get(item.id);
    
    return (
      <TouchableOpacity style={styles.item}>
        {imgUrl && (
          <Image source={{ uri: imgUrl }} style={styles.itemImage} />
        )}
        <Text style={styles.itemText}>{item.nombreCafe}</Text>
        <Text style={styles.itemDescription}>{item.Descripcion}</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Cargando cafés...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cafes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    paddingTop: 100,
  },
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
})