import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { Cafe, getCoffee, getImgCoffeById } from '../services/getCoffe'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../interface/RootStackParamList'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Dimensions } from 'react-native';
import { ModalCar } from '../components/ModalCar'
import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import { CarritoItem } from '../interface/CarritoItem'
const { width } = Dimensions.get('window');
export const Home = () => {

  type DetailsNavProp = NativeStackNavigationProp<RootStackParamList, 'Details'>;
  const navigation = useNavigation<DetailsNavProp>();
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [cafeSelect, setcafeSelect] = useState<Cafe | null>(null);
  const [carritoCafe, setCarritoCafe] = useState<CarritoItem[]>([]);
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

  const handleItemPress = (cafe: Cafe) => {
    navigation.navigate('Details', {
      Cafe: cafe,
      imgUrl: images.get(cafe.id) || '',
    });
  }


  const renderItem = ({ item }: { item: Cafe }) => {
    const imgUrl = images.get(item.id);

    return (
      <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
        {imgUrl && <Image source={{ uri: imgUrl }} style={styles.itemImage} />}
        <Text style={styles.itemText}>{item.nombreCafe}</Text>
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

  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
    const cafeVisible : Cafe = viewableItems[0].item;
    setcafeSelect(cafeVisible);
    console.log("Café en pantalla:", cafeVisible.id, cafeVisible.nombreCafe);
    }
  };

  const setCarrito = () => {
    if (cafeSelect) {
      setCarritoCafe((prevCarrito)=>{
        const index = prevCarrito.findIndex(item => item.cafe.id === cafeSelect.id);
        if (index !== -1) {
          const updatedCarrito = [...prevCarrito];
          updatedCarrito[index] = { ...updatedCarrito[index], cantidad: updatedCarrito[index].cantidad + 1 };
          return updatedCarrito;
        } else {
          return [...prevCarrito, { cafe: cafeSelect, cantidad: 1 }];
        }
      });
      console.log('Café agregado al carrito:', cafeSelect.nombreCafe);
    } else {
      console.log('No hay café seleccionado para agregar al carrito.');
    }
  }

  const onPressCarrito = () => {
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        style={styles.carritoButton}
        onPress={onPressCarrito}
        activeOpacity={0.6}
      >
        <MaterialIcons name="shopping-cart" color="#FFF2DF" size={25} />
      </TouchableOpacity>
      <FlatList
        data={cafes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={setCarrito}
        activeOpacity={0.6}
      >
        <Text style={styles.cartButtonText}>Agregar al carrito</Text>
      </TouchableOpacity>
      <ModalCar 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        carritoCafe={carritoCafe}
        setCarritoCafe={setCarritoCafe}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1D4C2',
    paddingTop: 5,
  },
  list: {
    alignContent: 'center',
    paddingVertical: 100,
  },
  contentContainer: {
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  item: {
    backgroundColor: '#E1D4C2',
    padding: 20,
    marginHorizontal: 0,
    borderRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    width: width,
    height: 350,
  },
  itemImage: {
    width: '100%',
    elevation: 5,
    height: 200,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 10
  },
  itemText: {
    paddingVertical: 50,
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#333',
  },
  itemDescription: {
    fontSize: 20,
    color: '#666',
    marginTop: 4,
  },
  carritoButton: {
    position: 'absolute',
    top: 200, 
    right: 30,
    backgroundColor: '#6E473B',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15,            // sombra en Android
    shadowColor: '#000',     // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    zIndex: 100,
  },
  cartButton: {
    position: 'absolute',
    bottom: 150,
    left: 20,
    right: 20,
    backgroundColor: '#A78D78',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,            // sombra en Android
    shadowColor: '#000',     // sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },


})