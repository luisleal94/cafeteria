import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native'
import { CarritoItem } from '../../interface/CarritoItem';
import { eliminarDelCarrito } from '../../util/carritoActions';
import { MaterialIcons } from '@react-native-vector-icons/material-icons';

interface ListCarProps {
    carritoCafe: CarritoItem[];
    setCarritoCafe: React.Dispatch<React.SetStateAction<CarritoItem[]>>;
}

export const ListCar = ({ carritoCafe, setCarritoCafe }: ListCarProps) => {
  return (
    <FlatList 
        data={carritoCafe}
        keyExtractor={(item) => item.cafe.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.row}>
                <Text style={styles.producto}>{item.cafe.nombreCafe}</Text>
                <Text style={styles.cantidad}>{item.cantidad}</Text>
                <TouchableOpacity onPress={() => eliminarDelCarrito(item.cafe.id, setCarritoCafe)}>
                    <MaterialIcons name="delete" color="#554936" size={25} />
                </TouchableOpacity>
            </View>
        )}

    />
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  producto: { fontSize: 16, flex: 1, color: '#333' },
  cantidad: { fontSize: 16, fontWeight: 'bold', color: '#6E473B', width: 60, textAlign: 'right', right: 25 },
  eliminar: { fontSize: 18, color: 'red', marginLeft: 10 },
})
