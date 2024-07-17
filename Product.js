import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, Switch } from 'react-native';

const Product = ({ navigation }) => {
    const [isGreyBackground, setIsGreyBackground] = useState(true);

    const handleLogout = () => {
        navigation.navigate('Home');
    };

    const products = [
        { id: 1, image: "https://www.ikea.com/in/en/images/products/gammalbyn-footstool-grey__0865108_pe781370_s5.jpg?f=xl", name: 'GAMMALBYN Footstool, grey', link: 'https://www.ikea.com/in/en/p/gammalbyn-footstool-grey-10473485/', price: 'Rs. 5,999' },
        { id: 2, image: "https://www.ikea.com/in/en/images/products/nodeland-bed-frame-black-brown__0980297_pe814900_s5.jpg?f=xl", name: 'NODELAND Bed frame', link: 'https://www.ikea.com/in/en/p/nodeland-bed-frame-black-brown-s39508540/', price: 'Rs. 25,999' },
        { id: 3, image: "https://www.ikea.com/in/en/images/products/billy-oxberg-bookcase-with-glass-doors-brown-walnut-effect__1096971_pe864642_s5.jpg?f=xl", name: 'Bookcase with glass doors', link: 'https://www.ikea.com/in/en/p/billy-oxberg-bookcase-with-glass-doors-brown-walnut-effect-s39483629/', price: 'Rs. 14,000' },
        { id: 4, image: "https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-grey__0868927_pe781435_s5.jpg?f=xl", name: '3-seat sofa', link: 'https://www.ikea.com/in/en/p/gammalbyn-3-seat-sofa-grey-70473251/', price: 'Rs. 46,000' },
        { id: 5, image: "https://www.ikea.com/in/en/images/products/varby-corner-shelf-unit-medium-brown__0653925_pe708165_s5.jpg?f=xl", name: 'Corner shelf unit', link: 'https://www.ikea.com/in/en/p/varby-corner-shelf-unit-medium-brown-00417579/', price: 'Rs. 8,999' },
        { id: 6, image: "https://www.ikea.com/in/en/images/products/kallax-shelving-unit-white__1051325_pe845148_s5.jpg?f=xl", name: 'Shelving unit', link: 'https://www.ikea.com/in/en/p/kallax-shelving-unit-white-20351884/', price: 'Rs. 12,999' },
        { id: 7, image: "https://www.ikea.com/in/en/images/products/hammarn-sofa-bed-knisa-dark-grey-black__0519027_pe641353_s5.jpg?f=xl", name: 'Divan Sofa Bed', link: 'https://www.ikea.com/in/en/p/hammarn-sofa-bed-knisa-dark-grey-black-80361494/', price: 'Rs. 31,999' },
        { id: 8, image: "https://www.ikea.com/in/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0736929_pe740809_s5.jpg?f=xl", name: 'JOKKMOKK Table and 4 chairs', link: 'https://www.ikea.com/in/en/p/jokkmokk-table-and-4-chairs-antique-stain-60365803/', price: 'Rs. 16,999' },
        { id: 9, image: "https://www.ikea.com/in/en/images/products/skogsta-dining-table-acacia__1340219_pe948521_s5.jpg?f=xl", name: 'SKOGSTA Dining table', link: 'https://www.ikea.com/in/en/p/skogsta-dining-table-acacia-40419265/', price: 'Rs. 19,999' },
        { id: 10, image: "https://www.ikea.com/in/en/images/products/lanesund-sideboard-grey-brown__1160570_pe888966_s5.jpg?f=xl", name: 'LANESUND Sideboard, ', link: 'https://www.ikea.com/in/en/p/lanesund-sideboard-grey-brown-70466547/', price: 'Rs. 23,999' },
    ];

    // Function to handle switch toggle
    const toggleBackgroundColor = () => {
        setIsGreyBackground(!isGreyBackground);
    };

    return (
        <View style={[styles.container, { backgroundColor: isGreyBackground ? 'grey' : 'white' }]}>
            <View style={styles.switchContainer}>
                <Text>Toggle Background:</Text>
                <Switch
                    value={isGreyBackground}
                    onValueChange={toggleBackgroundColor}
                />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {products.map((product) => (
                    <TouchableOpacity
                        key={product.id}
                        style={styles.productItem}
                
                    >
                        <Image
                            source={{ uri: product.image }}
                            style={styles.productImage}
                            resizeMode="cover"
                        />
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Button
                title="Logout"
                onPress={handleLogout}
                style={styles.logoutButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    scrollViewContent: {
        flexGrow: 1,
        width: '100%',
        backgroundColor:'transparent',
    },
    productItem: {
        marginBottom: 30,
        alignItems: 'center',
    },
    productImage: {
        width: 300,
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    productName: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    logoutButton: {
        marginTop: 20,
        padding: 20,
    },
});

export default Product;
