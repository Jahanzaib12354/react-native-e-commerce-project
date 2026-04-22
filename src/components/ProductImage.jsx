import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ProductImage = ({ image }) => {
  return (
    <View >
      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  

  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#e1e6e5',
  },
});