import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen'; 
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Welcome from './Welcome';
import Product from './Product';
import { AppProvider } from './AppContext';
import Wishlist from './Wishlist';
import Cart from './Cart';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <AppProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
    
  );
}

export default App;
