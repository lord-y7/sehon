import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Landing from "../screen/Landing";
import Home from "../screen/Home";
import Login from "../screen/Login";
// import Login from "../screen/Login";
import Register from "../screen/Register";
import Cart from "../screen/Cart";
import AboutUs from "../screen/AboutUs";
import ForgotPassword from "../screen/ForgotPassword";
import AddressScreen from "../screen/AddressScreen";
import ProductPage from "../screen/Product";
import AddAddressScreen from "../screen/AddAddressScreen";
import PaymentPage from "../screen/PaymentPage";
// import Product from "../screen/Product";
// import ForgotPassword from "../screen/ForgotPassword";
// import Cart from "../screen/Cart";
// import AboutUs from "../screen/AboutUs";
// import ProList from "../screen/ProList";
// import ProductListScreen from "../screen/Product";
// import ProductPage from "../screen/Product";
// import AddAddressScreen from "../screen/AddAddressScreen";
// import AddressScreen from "../screen/AddressScreen";
// import PaymentPage from "../screen/PaymentPage";

const StackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="AboutUs" component={AboutUs}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Product" component={ProductPage} />
      <Stack.Screen name="AddAddressScreen"component={AddAddressScreen}/>
      <Stack.Screen
          name="Add"
          component={AddressScreen}
          options={{ headerShown: false }}
        /> 
        <Stack.Screen name="Payment"component={PaymentPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};


export default StackNavigator;

const styles = StyleSheet.create({});
