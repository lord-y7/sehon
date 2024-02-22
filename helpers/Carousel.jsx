import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require("../assets/rice.jpg"),
    require("../assets/rice1.jpg"),
    require("../assets/paddy.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} autoplay circleLoop dotColor={"#13274F"}inactiveDotColor="#90A4AE" ImageComponentStyle={{width:"100%"}}/>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10, // Top-left corner
    borderTopRightRadius: 10, // Top-right corner
    overflow: 'hidden', // This is important for the borderRadius to take effect
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop:5
  },
});

export default Carousel;
