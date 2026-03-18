import React, { useState } from 'react'
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { useUserStore } from '../store/movilStore';
import { handleLogin } from '../util/handleLogin';

export const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseia, setContrasenia] = useState('');
  const { setLoggedIn, setUsername } = useUserStore();
  const imagen = require('../assets/img/coffe.jpeg');
  const onHandleLogin = () => {
    handleLogin(usuario, contraseia, setLoggedIn, setUsername, setUsuario, setContrasenia);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={imagen}
        style={styles.background}
        resizeMode="cover"
        imageStyle={styles.image}
      >
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={usuario}
            onChangeText={setUsuario}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={contraseia}
            onChangeText={setContrasenia}
          />
          <TouchableOpacity style={styles.button} onPress={onHandleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.56)',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
    width: '100%',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'rgb(77, 50, 21)',
    padding: 18,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
