import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons
import { useAppState, useAppDispatch } from './AppContext';

const Wishlist = ({ navigation }) => {
  const state = useAppState();
  const dispatch = useAppDispatch();

  const removeFromFavorites = (item) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: item });
  };

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => addToCart(item)}
        style={styles.cartButton}
      >
        <Icon name="shopping-cart" size={24} color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeFromFavorites(item)}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
      <FlatList
        data={state.favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No favorites yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  cartButton: {
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: 'white',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Wishlist;
