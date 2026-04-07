import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { CarritoItem } from '../interface/CarritoItem';
import { ListCar } from './molecules/ListCar';

interface ModalCarProps {
    visible: boolean;
    onClose: () => void;
    carritoCafe: CarritoItem[];
    setCarritoCafe: React.Dispatch<React.SetStateAction<CarritoItem[]>>;
}

export const ModalCar = ({ visible, onClose, carritoCafe, setCarritoCafe }: ModalCarProps) => {

  const validaLista = ()=>{
    if ( carritoCafe.length > 0 ){
      return false;
    }else{
      return true;
    }
  }

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={ onClose }
    >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tu carrito</Text>
            {carritoCafe.length === 0 ? (
              <Text style={styles.modalItem}>No hay cafés en el carrito</Text>
            ) : (
              <ListCar carritoCafe={carritoCafe} setCarritoCafe={setCarritoCafe} />
            )}
            <View style={styles.buttonsRow}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={onClose}
              >
                <Text style={styles.cartButtonText}>Cerrar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.payButton]}
                onPress={() => console.log('Pagar')}
                disabled={ validaLista() }
              >
                <Text style={styles.cartButtonText}>Pagar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#F5F1EA',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
  closeButton: {
    marginTop: 20,
    backgroundColor: '#A78D78',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonsRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#A78D78',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,  
  },
  payButton: {
  backgroundColor: '#7D5A44',
},
})
