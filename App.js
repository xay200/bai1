import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Alert } from 'react-native';

export default function App() {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
    const validatePhoneNumber = (phone) => {
      // Biểu thức Regex kiểm tra số điện thoại Việt Nam
      const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
  
      if (phoneRegex.test(phone)) {
        setErrorMessage('');
      } else {
        setErrorMessage('Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
        Alert.alert('Số điện thoại không đúng định dạng. Vui lòng nhập lại.');
      }
    };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>

      {/* Input Section */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nhập số điện thoại</Text>
        <Text style={styles.description}>
          Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing
          Pro
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập số điện thoại của bạn"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <Button
          title="Tiếp tục"  
          onPress={() => validatePhoneNumber(phoneNumber)}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(154, 149, 149)',
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000000",
  },
  description: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 15,

  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(154, 149, 149)',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
  },

  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});
