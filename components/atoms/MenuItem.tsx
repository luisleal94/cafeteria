import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MenuItemProps {
  label: string;
  onPress: () => void;
}

export const MenuItem = ({ label, onPress }: MenuItemProps) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
