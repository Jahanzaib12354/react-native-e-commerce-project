import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const CheckoutScreen = ({ route, navigation, setCart }) => {

  const { total } = route.params;

  const handleOrder = () => {

    Alert.alert(
      "Order Success 🎉",
      "Your order has been placed successfully!",
      [
        {
          text: "OK",
          onPress: () => {

            setCart([]);

            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });

          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Checkout</Text>

        <Text style={styles.subtitle}>
          Please review your order before confirming
        </Text>

        <View style={styles.totalBox}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.total}>Rs {total}</Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleOrder}>
          <Text style={styles.btnText}>Place Order</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },

  totalBox: {
    width: '100%',
    backgroundColor: '#f3f6fb',
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    alignItems: 'center',
  },

  totalLabel: {
    fontSize: 14,
    color: '#888',
  },

  total: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginTop: 5,
  },

  btn: {
    backgroundColor: '#000',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 12,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});