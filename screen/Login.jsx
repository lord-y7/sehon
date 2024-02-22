import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Alert,
  Pressable,
  TextInput,
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import axios from "axios";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);
  const handleLogin = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
  
      const response = await axios.post("http://192.168.0.114:8080/login", user);
      const token = response.data.token;
      AsyncStorage.setItem("authToken", token);
      Alert.alert("Login Successful", "You have successfully logged in.");

      // Navigate to Home screen after 2 seconds
      setTimeout(() => {
        navigation.replace("Home");
      }, 2000);
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code (4xx or 5xx)
        if (error.response.status === 401) {
          Alert.alert("Login Error", "Invalid email or password");
        } else {
          Alert.alert("Login Error", "An unexpected error occurred");
        }
      } else if (error.request) {
        // The request was made but no response was received
        Alert.alert("Login Error", "No response from server");
      } else {
        // Something else happened while setting up the request
        Alert.alert("Login Error", "Failed to send request");
      }
      console.error("Login Error:", error);
    }
  };
  
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Login In to your Account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <Fontisto
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your Email"
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)} // Changed onChange to onChangeText
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter your Password"
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Keep me logged in</Text>
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Pressable
           onPress={handleLogin}
            style={{
              width: 200,
              backgroundColor: "#FEBE10",
              borderRadius: 6,
              marginLeft: "auto",
              padding: 15,
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
               
              }}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  logo: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
});
export default Login;
