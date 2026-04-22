import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CartSummary = ({ total, navigation }) => {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.amount}>Rs {total}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Checkout', { total })}
      >
        <Text style={styles.btnText}>Checkout</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CartSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  label: {
    color: '#534d4d',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});