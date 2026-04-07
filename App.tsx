import { StyleSheet, View } from 'react-native';
import { useUserStore } from './store/movilStore';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { RootStackParamList } from './interface/RootStackParamList';
import { Details } from './components/Details';

export default function App() {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const Stack = createNativeStackNavigator<RootStackParamList>();


  return (
    <View  style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen 
              name="Home" 
              component={Home}
              options={ { headerShown:false} }
              />
            <Stack.Screen 
              name="Details" 
              component={Details}
              options={ { headerShown:false} } />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
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
