import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { HamburgerButton } from './atoms/HamburgerButton'
import { Menu } from './molecules/Menu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <View style={styles.header}>
      <HamburgerButton 
        onPress={() => setMenuOpen(!menuOpen)} 
        isOpen={menuOpen}
      />
      <Text style={styles.title}>Cafetería Azul</Text>
      <View style={styles.spacer} />
      <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    zIndex: 1001,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  spacer: {
    width: 40,
  },
})

export default Header