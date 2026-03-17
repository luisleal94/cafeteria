import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useUserStore } from '../store/movilStore'
import Header from '../components/Header'

export const Home = () => {
  return (
    < View
      style={styles.container}
    >
      <Header />
      <Text>Bienvenido usuario {useUserStore.getState().username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
    justifyContent: 'center',
  }
})