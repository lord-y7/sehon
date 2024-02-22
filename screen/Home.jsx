import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from "../helpers/Carousel";
import ProductsSection from '../helpers/ProductSection';
import Category from '../helpers/Category';

import { useNavigation } from '@react-navigation/native';
import Deal from './Deal';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('User');
  const navigation = useNavigation(); // Use the hook to get the navigation object
  const handleNavItemClick = (item) => {
    console.log('Navigating to:', item);
    switch (item) {
      case 'Home':
        navigation.navigate('Home');
        break;
      case 'Product':
        console.log('Navigating to Product screen');
        navigation.navigate('Product');
        break;
      case 'AboutUs':
        navigation.navigate('AboutUs');
        break;
      case 'Cart':
        navigation.navigate('Cart', { userName: 'John Doe' }); 
        break;
      case 'Login':
        navigation.navigate('Login');
        break;
      default:
        break;
    }
  };
  const deals = [
    {
      id: "20",
      title: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
      oldPrice: 25000,
      price: 19000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/wireless_products/ssserene/weblab_wf/xcm_banners_2022_in_bau_wireless_dec_580x800_once3l_v2_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/61QRgOgBx0L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61uaJPLIdML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/510YZx4v3wL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61J6s1tkwpL._SX679_.jpg",
      ],
      color: "Stellar Green",
      size: "6 GB RAM 128GB Storage",
    },
    {
      id: "30",
      title:
        "Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers",
      oldPrice: 74000,
      price: 26000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/S20FE/GW/June23/BAU-27thJune/xcm_banners_2022_in_bau_wireless_dec_s20fe-rv51_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY879_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71yzyH-ohgL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61vN1isnThL._SX679_.jpg",
      ],
      color: "Cloud Navy",
      size: "8 GB RAM 128GB Storage",
    },
    {
      id: "40",
      title:
        "Samsung Galaxy M14 5G (ICY Silver, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | Android 13 | Without Charger",
      oldPrice: 16000,
      price: 14000,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/CatPage/Tiles/June/xcm_banners_m14_5g_rv1_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/817WWpaFo1L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81KkF-GngHL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61IrdBaOhbL._SX679_.jpg",
      ],
      color: "Icy Silver",
      size: "6 GB RAM 64GB Storage",
    },
    {
      id: "40",
      title:
        "realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera",
      oldPrice: 12999,
      price: 10999,
      image:
        "https://images-eu.ssl-images-amazon.com/images/G/31/tiyesum/N55/June/xcm_banners_2022_in_bau_wireless_dec_580x800_v1-n55-marchv2-mayv3-v4_580x800_in-en.jpg",
      carouselImages: [
        "https://m.media-amazon.com/images/I/41Iyj5moShL._SX300_SY300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61og60CnGlL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61twx1OjYdL._SX679_.jpg",
      ],
    },
  ];
 
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Perform logout actions
      setIsLoggedIn(false); // Set isLoggedIn state to false
      setUserName('User'); // Reset userName to default
    } else {
      // Perform login actions
      navigation.navigate('Login');
    }
  };
  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage} resizeMode="cover">
      <View style={styles.container}>
        {/* Top Welcome Section */}
        <View style={styles.topBar}>
        <Text style={styles.welcomeText}>Welcome, {isLoggedIn ? userName : 'User'}</Text>
          <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search..." />
            <TouchableOpacity style={styles.searchIcon}>
              <Icon name="search-outline" size={24} color="#001F3F" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Separator Line */}
        <View style={styles.separator} />
       <ScrollView>
        <View style={styles.carousel}>
          <Carousel/>
        </View>
        {/* <Text style={{padding:10,fontSize:18,fontWeight:"bold"}}> Trending Deals </Text> */}
       
        <View style={styles.productsSection}>
          <ProductsSection/>
        </View>
        <View style={styles.dealSection}>
          <Deal/>
        </View>
        
        </ScrollView>
        {/* Bottom Navigation Bar */}
      
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavItemClick('Home')}>
            <Icon name="home" size={24} color="#001F3F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavItemClick('Product')}>
            <Icon name="apps" size={24} color="#001F3F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavItemClick('AboutUs')}>
            <Icon name="information-circle" size={24} color="#001F3F" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => handleNavItemClick('Cart')}>
            <Icon name="cart" size={24} color="#001F3F" />
          </TouchableOpacity>
          {isLoggedIn ? (
            <TouchableOpacity style={styles.navItem} onPress={handleLoginLogout}>
              <Text style={styles.navText}>Logout</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.navItem} onPress={handleLoginLogout}>
              <Text style={styles.navText}>Login</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

// const handleNavItemClick = (item) => {
//   // Handle navigation item click logic
//   console.log(`Clicked on ${item}`);
// };

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:"1%"
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 50, // Adjusted padding for better visibility
    },
    welcomeText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 0, // Adjusted margin for better placement
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10, // Adjusted margin for better placement
    },
    searchInput: {
      width: 100,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 5,
      marginLeft:150
    },
    searchIcon: {
      marginLeft: 4,
    },
    separator: {
      height: 1,
      backgroundColor: '#001F3F', // Dark blue color
      width: '100%',
      marginTop: "5%",
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#FFD700', // Saffron color
      position: 'absolute',
      bottom: 0,
      width: '100%',
      paddingVertical: 10,
    },
    navItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
    },
    navText: {
      color: '#001F3F', // Dark blue color
      fontSize: 16,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    carousel:{
      width:"98%",
      height:"15%",
      marginTop:"0%",
      marginBottom:"-1%",
      marginLeft:".5%"
    },
    categoryslider:{
      width:"100%",
      maxHeight:50,
      marginTop:"10%"
    },
    productsSection:{
      marginTop:"5%",
    },
    dealSection:{
      marginBottom:"30%"
    }
  });

export default Home;
