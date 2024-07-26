import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,ImageBackground} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import HelpScreen from './HelpScreen'; 
import Popular from './Popular';  
import Product from './Product';
import Wishlist from './Wishlist';
import Cart from './Cart';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('./assets/furniture3.jpg')} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Find Your</Text>
        <Text style={styles.text}>Dream Furniture</Text>
        <TouchableOpacity
          style={styles.exploreContainer}
          onPress={() => navigation.navigate('Product')} 
        >
          <Text style={styles.exploreText}>Explore</Text>
          <Icon name="arrow-right" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={WelcomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="home"
              size={size}
              color={focused ? 'black' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="heart"
              size={size}
              color={focused ? 'black' : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="shopping-cart"
              size={size}
              color={focused ? 'black' : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{ title: 'Home' }}
      />
      <Drawer.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ title: 'Help & Support' }}
      />
      <Drawer.Screen
        name="Popular" 
        component={Popular} 
        options={{ title: 'Popular Picks' }}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    //resizeMode: 'cover',
    justifyContent:"center",
    alignItems:"center,"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontSize: 64,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  exploreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 10,
  },
});
