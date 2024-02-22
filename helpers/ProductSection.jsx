import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const products = [
  { id: '1', name: 'Maize', image: require('../assets/maize.jpg') },
  { id: '2', name: 'Wheat 1', image: require('../assets/wheat1.jpg') },
  { id: '3', name: 'Paddy', image: require('../assets/paddy.jpg') },
  { id: '4', name: 'Tools', image: require('../assets/tools.jpg') },
  { id: '5', name: 'Wheat', image: require('../assets/wheat.jpg') },
  { id: '6', name: 'Pasta', image: require('../assets/pasta.jpg') },
  { id: '3', name: 'Paddy', image: require('../assets/paddy.jpg') },
  { id: '4', name: 'Tools', image: require('../assets/tools.jpg') },
  { id: '5', name: 'Wheat', image: require('../assets/wheat.jpg') },
  { id: '6', name: 'Pasta', image: require('../assets/pasta.jpg') },
  // Add more products as needed
];

const ProductsSection = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {chunkArray(products, 2).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((product) => (
            <View key={product.id} style={styles.productItem}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// Function to chunk array into groups
const chunkArray = (array, chunkSize) => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, index) =>
    array.slice(index * chunkSize, (index + 1) * chunkSize)
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 80,
    flexGrow: 1, // Ensure that content covers the whole page
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  productItem: {
    width: '48%', // Adjust the width based on your styling preference
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100, // Adjust the height based on your styling preference
    resizeMode: 'cover',
    borderRadius: 8, // Adjust the borderRadius based on your styling preference
  },
  productName: {
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ProductsSection;
