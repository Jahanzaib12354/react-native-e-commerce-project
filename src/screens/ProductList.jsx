import React from 'react';
import { View, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductList = ({ navigation }) => {

  const products = [
    {
      id: 1,
      name: 'Tesla Model S',
      price: 3500000,
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7'
    },
    {
      id: 2,
      name: 'BMW M4',
      price: 2500000,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e'
    },
    {
      id: 3,
      name: 'Audi',
      price: 3500000,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6'
    },
    
  ];

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>

        {products.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            onPress={() =>
              navigation.navigate('Product', { product: item }) // ✅ send data
            }
          />
        ))}

      </View>
    </ScrollView>
  );
};

export default ProductList;