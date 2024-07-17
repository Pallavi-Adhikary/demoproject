import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Button from './Button';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'black', fontSize: 64, }}>Feel the </Text>
      <Text style={{ color: 'black', fontSize: 64, marginBottom: 40 }}>Comfort</Text>
      <Button bgColor={green} textColor='white' buttonLabel="Login" Press={() => props.navigation.navigate("Login")} />
      <Button bgColor='white' textColor={darkGreen} buttonLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;