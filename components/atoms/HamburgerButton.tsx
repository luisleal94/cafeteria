import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface HamburgerButtonProps {
  onPress: () => void;
  isOpen: boolean;
}

export const HamburgerButton = ({ onPress, isOpen }: HamburgerButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{isOpen ? '✕' : '☰'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  icon: {
    fontSize: 24,
    color: '#333',
  },
});
