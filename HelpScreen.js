import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.sectionTitle}>How to Use the App</Text>
        <Text style={styles.text}>
        </Text>
        <Text style={styles.sectionTitle}>FAQs</Text>
        <Text style={styles.text}>
          Q: How do I add items to the cart? {'\n'}
          A: Navigate to the product page and click on the "Add to Cart" button.
        </Text>
        <Text style={styles.text}>
          Q: How do I view my wishlist? {'\n'}
          A: Click on the "Wishlist" tab in the bottom navigation to view your saved items.
        </Text>
        <Text style={styles.text}>
          Q: Do you offer furniture assembly services?{'\n'}
          A:Yes, we offer assembly services for most furniture items.
        </Text>
       
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    marginTop:15,
  },
});

export default HelpScreen;
