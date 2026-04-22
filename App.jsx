

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductList from './src/screens/ProductList';
import ProductPage from './src/components/ProductPage';
import CarsScreen from './src/screens/CarsScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={ProductList}
        />

        <Stack.Screen name="Product">
          {(props) => (
            <ProductPage {...props} addToCart={addToCart} />
          )}
        </Stack.Screen>

        
        
        <Stack.Screen name="Cars">
          {(props) => (
            <CarsScreen {...props} cart={cart} setCart={setCart} />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;