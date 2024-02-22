import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      // Inform the user that a password reset email has been sent
    } catch (error) {
      console.error('Error sending password reset email:', error);
    }
  };

  return (
    <View>
      <Text>Forgot Password</Text>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <Button title="Reset Password" onPress={handleForgotPassword} />
    </View>
  );
};

export default ForgotPassword;
