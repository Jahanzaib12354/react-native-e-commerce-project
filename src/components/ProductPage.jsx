import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';

const ProductPage = ({ route, addToCart }) => {

  const { product } = route.params; 

  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.container}>

      <ProductImage image={product.image} />

      <ProductInfo
        product={product}
        quantity={quantity}
        setQuantity={setQuantity}
        addToCart={addToCart}
      />

    </ScrollView>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});