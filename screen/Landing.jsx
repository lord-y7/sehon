import React, { useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const Landing = ({ navigation }) => {
  const handleGettingStartedPress = () => {
    navigation.navigate("Home");
  };
  const fetchApi = async () => {
    try {
      const res = await axios.get("http://192.168.0.114:8080");
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    fetchApi();
  });

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to E-commerce</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGettingStartedPress}
        >
          <Text style={styles.buttonText}>Getting Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity to your liking
  },
  text: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    bottom: 50, // Fixed value, adjust as needed
    backgroundColor: "#2980b9",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Landing;
