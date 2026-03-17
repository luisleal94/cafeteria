import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { MenuItem } from '../atoms/MenuItem';
import { useUserStore } from '../../store/movilStore';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { logout } = useUserStore();

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      Alert.alert('Error', 'No se pudo cerrar sesión');
    }
  };

  if (!isOpen) return null;

  return (
    <View style={styles.container}>
      <MenuItem label="Ubicaciones" onPress={() => console.log('Ubicaciones')} />
      <MenuItem label="Cerrar Sesión" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
    left: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    zIndex: 1000,
    minWidth: 200,
  },
});
