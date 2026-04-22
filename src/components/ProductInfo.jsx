import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import QuantitySelector from './QuantitySelector';
import { useNavigation } from '@react-navigation/native';

const ProductInfo = ({ product, quantity, setQuantity, addToCart }) => {

  const navigation = useNavigation();

  const handleAddToCart = () => {

    const item = {
      ...product,
      quantity: quantity,
    };

    addToCart(item);

    navigation.navigate('Cars');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>Rs {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      <TouchableOpacity style={styles.cartBtn} onPress={handleAddToCart}>
        <Text style={styles.cartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  title: { fontSize: 24, fontWeight: 'bold' },
  price: { fontSize: 20, color: 'green', marginVertical: 5 },
  description: { fontSize: 14, color: '#555', marginVertical: 10 },
  cartBtn: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  cartText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});