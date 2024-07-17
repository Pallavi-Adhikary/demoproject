import React from 'react';
import { View, ImageBackground } from 'react-native';

const Background = ({ children }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <ImageBackground source={require("./assets/furnitute1.jpg")} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1 }}>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}


export default Background;