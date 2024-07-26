import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppState, useAppDispatch } from './AppContext';

const Cart = ({ navigation }) => {
    const state = useAppState();
    const dispatch = useAppDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    };

    const renderCartItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Image
                source={{ uri: item.image }}
                style={styles.cartImage}
                resizeMode="cover"
            />
            <View style={styles.cartDetails}>
                <Text style={styles.cartName}>{item.name}</Text>
                <Text style={styles.cartPrice}>{item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
                <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shopping Cart</Text>
            <FlatList
                data={state.cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCartItem}
                contentContainerStyle={styles.cartList}
            />
            <TouchableOpacity 
                style={styles.checkoutButton}
                onPress={() => navigation.navigate('Home')} 
            >
                <Text style={styles.checkoutButtonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cartList: {
        flexGrow: 1,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cartImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10,
    },
    cartDetails: {
        flex: 1,
    },
    cartName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cartPrice: {
        fontSize: 14,
        color: 'grey',
    },
    checkoutButton: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 20,
        paddingVertical: 11,
        borderRadius: 5,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Cart;
