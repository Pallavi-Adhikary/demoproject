import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.blackBackground}></View>
      <ImageBackground
        style={styles.imageBackground}
        resizeMode="cover"
        source={require('./assets/logo1.jpg')}
        >
      </ImageBackground>
    </View>
  );
};

const { width, height } = Dimensions.get('window'); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', 
  },
  blackBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: width * 0.5,  
    height: height * 0.4,  
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;