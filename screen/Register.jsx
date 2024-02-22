import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      if (!name || !email || !password) {
        Alert.alert("Error", "Please fill in all fields");
        return;
      }

      const user = { name, email, password };

      const response = await axios.post("http://192.168.0.114:8080/register", user);

      console.log(response.data);

      Alert.alert(
        "Registration successful",
        "You have been registered Successfully"
      );

      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration failed", error);
      Alert.alert("Registration Error", "An error occurred while registering");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/logo.jpg")}
          style={styles.logo}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register to your Account</Text>

          <View style={styles.inputContainer}>
            <Ionicons
              name="ios-person"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={name}
              onChangeText={setName}
              style={styles.input}
              placeholder="Enter your name"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>

          <View style={styles.bottomLinks}>
            <Text>Keep me logged in</Text>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </View>

          <Pressable onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>

          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.signInLink}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 30,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  formContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    color: "#041E42",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D0D0D0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 16,
  },
  bottomLinks: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgotPassword: {
    color: "#007FFF",
    fontWeight: "500",
  },
  button: {
    width: 200,
    backgroundColor: "#FEBE10",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 15,
    marginTop: 80,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInLink: {
    marginTop: 15,
    textAlign: "center",
    color: "gray",
    fontSize: 16,
  },
});

export default RegisterScreen;
