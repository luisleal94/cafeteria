import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>Monito's Cofee </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E1D4C2',
    zIndex: 1001,
  },
  title: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: '#333',
    textAlign: 'center',
    paddingTop: 5,
  }
})

export default Header