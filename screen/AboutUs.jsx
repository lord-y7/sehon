import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>About Us</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Welcome to Our Company! We are a leading provider of innovative solutions in the tech industry.
        </Text>
        <Text style={styles.contentText}>
          Our mission is to deliver high-quality products and services that meet the evolving needs of our customers.
        </Text>
        <Text style={styles.contentText}>
          At Our Company, we believe in excellence, integrity, and customer satisfaction. Our dedicated team of professionals works tirelessly to ensure that we exceed your expectations.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: '#007BFF',
  },
  header: {
    fontSize: 24,
    marginLeft: 10,
  },
  contentContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutUs;
