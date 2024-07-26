import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const sections = [
  {
    title: 'Living Room',
    data: [
      {
        id: '1',
        name: 'Modern Sofa',
        price:"Rs 46,000",
        image: 'https://th.bing.com/th/id/OIP.u0uPfk78bJBkhLZ7o0PW8wHaFj?rs=1&pid=ImgDetMain',
      },
      {
        id: '4',
        name: 'Comfortable Armchair',
        price:"Rs 8,000",
        image: 'https://i5.walmartimages.com/asr/2816f76d-4b4b-4c49-a0af-4e6cb52f132f.818eb2a27e03c56b2c5ab321ceb2277b.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff',
      },
    ],
  },
  {
    title: 'Dining Room',
    data: [
      {
        id: '2',
        name: 'Wooden Dining Table',
        price:"Rs 20,000",
        image: 'https://th.bing.com/th/id/OIP.grMWFC7MJvlKhHbuf7nvfgHaEK?w=3456&h=1944&rs=1&pid=ImgDetMain',
      },
    ],
  },
  {
    title: 'Bedroom',
    data: [
      {
        id: '3',
        name: 'Elegant Bed Frame',
        price:"Rs 38,000",
        image: 'https://th.bing.com/th/id/R.8d51b488e9404fdd53515cf7cc5eb87a?rik=krNrA4JJJLd9vw&riu=http%3a%2f%2fcdn.trendir.com%2fwp-content%2fuploads%2f2016%2f07%2fElegant-Upholstered-Headboards-King-900x709.jpg&ehk=9vuznUzHRjmxoS0%2bRpZCEy%2bmR3MlJ2S%2ft9D1oKNM%2bJc%3d&risl=&pid=ImgRaw&r=0',
      },
      {
        id: '5',
        name: 'Nikamal Stool',
        price:"Rs 8,500",
        image: 'https://images-na.ssl-images-amazon.com/images/I/81g-kzUvNdL._AC_SL1500_.jpg',
      },
    ],
  },
];


const SectionView = ({ title, data }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionHeader}>{title}</Text>
      {data.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
      ))}
    </View>
  );
};

const Popular = () => {
  return (
    <ScrollView style={styles.container}>
      {sections.map(section => (
        <SectionView
          key={section.title}
          title={section.title}
          data={section.data}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  sectionContainer: {
    marginBottom: 24,
    paddingHorizontal: 180,
    //backgroundColor: 'lightgreen', 
    borderRadius: 8, 
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 16,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 4,
    alignItems: 'center', 
    padding: 8,
  },
  image: {
    width: 500, 
    height: 350, 
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8, 
    color: '#333',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8, 
    color: '#333',
  },
});

export default Popular;
