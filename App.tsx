import { StyleSheet, Text, View } from 'react-native';
import { useUserStore } from './store/movilStore';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import Header from './components/Header';

export default function App() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <View style={styles.container}>
      {isLoggedIn && <Header />}
      {isLoggedIn ? <Home /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
