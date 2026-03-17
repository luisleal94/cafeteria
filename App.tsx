import { StyleSheet, View } from 'react-native';
import { useUserStore } from './store/movilStore';
import { Home } from './screens/Home';
import { Login } from './screens/Login';

export default function App() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <View style={styles.container}>
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
