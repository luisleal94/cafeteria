import React from 'react'
import { Text, View, Image } from 'react-native'
import { Cafe } from '../interface/Cafe'
import { RootStackParamList } from '../interface/RootStackParamList';
import { RouteProp } from '@react-navigation/native';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;


interface DetailsProps {
    cafe: Cafe,
    img: string,
}


export const Details = ({ route }: { route: DetailsRouteProp }) => {
    const { Cafe: cafe, imgUrl } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details</Text>
        <Text>ID: {cafe.id}</Text>
        <Text>Nombre: {cafe.nombreCafe}</Text>
        <Text>Descripción: {cafe.Descripcion}</Text>
        <Image source={{ uri: imgUrl }} style={{ width: 200, height: 200 }} />
    </View>
  )
}
