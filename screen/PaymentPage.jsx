import React from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const PaymentPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const totalAmount = route.params?.total || 0;
console.log(totalAmount);
  const handlePayment = () => {
    // Implement payment logic here
    alert("Payment Successful!");
    // Navigate back to cart or any other relevant screen
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.amountText}>Amount to Pay: ${totalAmount}</Text>
      <TextInput style={styles.input} placeholder="Card Number" />
      <TextInput style={styles.input} placeholder="Expiry Date" />
      <TextInput style={styles.input} placeholder="CVV" />

      <Pressable style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  amountText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
  },
  payButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default PaymentPage;
