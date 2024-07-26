import React from 'react';
import { View, Text, StyleSheet, Image, Switch, SectionList, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAppState, useAppDispatch } from './AppContext';

const Product = ({ navigation }) => {
    const [isGreyBackground, setIsGreyBackground] = React.useState(true);
    const state = useAppState();
    const dispatch = useAppDispatch();

    const sections = [
        {
            category: 'Sofas and Beds',
            data: [
                { id: 4, image: "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868927_pe781435_s5.jpg?f=xl", name: '3-seat sofa', link: 'https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-grey-70473251/', price: 'Rs. 46,000' },
                { id: 7, image: "https://www.ikea.com/in/en/images/products/hammarn-sofa-bed-knisa-dark-grey-black__0519027_pe641353_s5.jpg?f=xl", name: 'Divan Sofa Bed', link: 'https://www.ikea.com/in/en/p/hammarn-sofa-bed-knisa-dark-grey-black-80361494/', price: 'Rs. 31,999' },
                { id: 2, image: "https://www.ikea.com/in/en/images/products/nodeland-bed-frame-black-brown__0980297_pe814900_s5.jpg?f=xl", name: 'NODELAND Bed frame', link: 'https://www.ikea.com/in/en/p/nodeland-bed-frame-black-brown-s39508540/', price: 'Rs. 25,999' },
            ]
        },
        {
            category: 'Tables and Chairs',
            data: [
                { id: 8, image: "https://www.ikea.com/in/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0736929_pe740809_s5.jpg?f=xl", name: 'JOKKMOKK Table and 4 chairs', link: 'https://www.ikea.com/in/en/p/jokkmokk-table-and-4-chairs-antique-stain-60365803/', price: 'Rs. 16,999' },
                { id: 9, image: "https://www.ikea.com/in/en/images/products/skogsta-dining-table-acacia__1340219_pe948521_s5.jpg?f=xl", name: 'SKOGSTA Dining table', link: 'https://www.ikea.com/in/en/p/skogsta-dining-table-acacia-40419265/', price: 'Rs. 19,999' },
            ]
        },
        {
            category: 'Stools',
            data: [
                { id: 1, image: "https://www.ikea.com/in/en/images/products/gammalbyn-footstool-grey__0865108_pe781370_s5.jpg?f=xl", name: 'GAMMALBYN Footstool, grey', link: 'https://www.ikea.com/in/en/p/gammalbyn-footstool-grey-10473485/', price: 'Rs. 5,999' },
            ]
        },
        {
            category: 'Shelves',
            data: [
                { id: 3, image: "https://www.ikea.com/in/en/images/products/billy-oxberg-bookcase-with-glass-doors-brown-walnut-effect__1096971_pe864642_s5.jpg?f=xl", name: 'Bookcase with glass doors', link: 'https://www.ikea.com/in/en/p/billy-oxberg-bookcase-with-glass-doors-brown-walnut-effect-s39483629/', price: 'Rs. 14,000' },
                { id: 5, image: "https://www.ikea.com/in/en/images/products/varby-corner-shelf-unit-medium-brown__0653925_pe708165_s5.jpg?f=xl", name: 'Corner shelf unit', link: 'https://www.ikea.com/in/en/p/varby-corner-shelf-unit-medium-brown-00417579/', price: 'Rs. 8,999' },
                { id: 6, image: "https://www.ikea.com/in/en/images/products/kallax-shelving-unit-white__1051325_pe845148_s5.jpg?f=xl", name: 'Shelving unit', link: 'https://www.ikea.com/in/en/p/kallax-shelving-unit-white-20351884/', price: 'Rs. 12,999' },
                { id: 10, image: "https://www.ikea.com/in/en/images/products/lanesund-sideboard-grey-brown__1160570_pe888966_s5.jpg?f=xl", name: 'LANESUND Sideboard', link: 'https://www.ikea.com/in/en/p/lanesund-sideboard-grey-brown-70466547/', price: 'Rs. 23,999' },
            ]
        },
    ];

    const toggleBackgroundColor = () => {
        setIsGreyBackground(!isGreyBackground);
    };

    const handleAddToFavorites = (item) => {
        dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
    };

    const handleAddToCart = (item) => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    const handleLogout = () => {
        navigation.navigate('Login'); 
    };

    const renderProductItem = ({ item }) => {
        const isFavorited = state.favorites.some(fav => fav.id === item.id);
        const isInCart = state.cart.some(cartItem => cartItem.id === item.id);

        return (
            <View style={styles.productItem}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.productImage}
                    resizeMode="cover"
                />
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <View style={styles.actionsContainer}>
                    <TouchableOpacity onPress={() => handleAddToFavorites(item)}>
                        <Icon name={isFavorited ? 'heart' : 'heart-o'} size={24} color={isFavorited ? 'red' : 'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleAddToCart(item)}>
                        <Icon name={isInCart ? 'shopping-cart' : 'cart-plus'} size={24} color={isInCart ? 'green' : 'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isGreyBackground ? 'grey' : 'white' }]}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Welcome')} 
                style={styles.backButton}
            >
                <Text style={styles.backButtonText}>Go Back</Text>
            </TouchableOpacity>
            <View style={styles.switchContainer}>
                <Text>Toggle Background:</Text>
                <Switch
                    value={isGreyBackground}
                    onValueChange={toggleBackgroundColor}
                />
            </View>
            <SectionList
                sections={sections}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderProductItem}
                renderSectionHeader={({ section }) => (
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>{section.category}</Text>
                    </View>
                )}
                contentContainerStyle={styles.sectionListContent}
            />
            <TouchableOpacity
                onPress={handleLogout}
                style={styles.logoutButton}
            >
                <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionHeader: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    productItem: {
        marginBottom: 30,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    productImage: {
        width: 500, // Shortened width
        height: 400, // Shortened height
        marginBottom: 10,
        borderRadius: 10,
    },
    productName: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10,
    },
    backButton: {
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    backButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight:"bold",
        alignItems:"center",
    },
    logoutButton: {
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    logoutButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight:"bold",
        alignItems:"center",
    },
});

export default Product;
