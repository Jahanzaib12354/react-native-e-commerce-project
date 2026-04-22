import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <Text style={styles.number}>{quantity}</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setQuantity(quantity + 1)}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  btn: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});