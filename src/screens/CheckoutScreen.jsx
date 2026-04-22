import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const CheckoutScreen = ({ route, navigation }) => {

  const { total } = route.params;

  const handleOrder = () => {
    Alert.alert("Success", "Order Placed Successfully ✅");
    navigation.navigate('Product');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Checkout</Text>

      <Text style={styles.total}>Total: Rs {total}</Text>

      <TouchableOpacity style={styles.btn} onPress={handleOrder}>
        <Text style={styles.btnText}>Place Order</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  total: {
    fontSize: 20,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});