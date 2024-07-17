import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


const Welcome = ({ navigation }) => {
  const [showBackgroundImage, setShowBackgroundImage] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(require('./assets/furnitute1.jpg')); // Initial background image

  const toggleBackgroundImage = () => {
    if (showBackgroundImage) {
      setBackgroundImage(require('./assets/furniture3.jpg')); // Change to your second image path
    } else {
      setBackgroundImage(require('./assets/furnitute1.jpg')); // Change to your first image path
    }
    setShowBackgroundImage(!showBackgroundImage);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.text}>Find Your</Text>
          <Text style={styles.text}>Dream Furniture</Text>
          <Button
            title="Explore"

            onPress={() => navigation.navigate('Product')}
          />
        </View>
      </ImageBackground>


      <Button
        title={showBackgroundImage ? "Didn't like the background?Change it":"New background"}
        onPress={toggleBackgroundImage}
        style={styles.toggleButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  text: {
    fontSize:64,
    marginBottom: 20,
    color: 'white',
    fontWeight:"bold"
  },
  toggleButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'green', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    bgcolor:"green",
    textcolor:"white",
    
    
  },
});

export default Welcome;
