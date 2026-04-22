import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductList from './src/screens/ProductList';
import ProductPage from './src/components/ProductPage';
import CarsScreen from './src/screens/CarsScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';

import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // 🔥 CLEAR CART FUNCTION (BEST PRACTICE)
  const clearCart = () => {
    setCart([]);
  };

  return (
    <PaperProvider>

      <NavigationContainer>

        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}
        >

          {/* HOME */}
          <Stack.Screen
            name="Home"
            component={ProductList}
            options={{
              headerBackVisible: false,
            }}
          />

          {/* PRODUCT */}
          <Stack.Screen name="Product">
            {(props) => (
              <ProductPage {...props} addToCart={addToCart} />
            )}
          </Stack.Screen>

          {/* CART */}
          <Stack.Screen name="Cars">
            {(props) => (
              <CarsScreen {...props} cart={cart} setCart={setCart} />
            )}
          </Stack.Screen>

          {/* CHECKOUT (🔥 IMPORTANT FIX HERE) */}
          <Stack.Screen name="Checkout">
            {(props) => (
              <CheckoutScreen
                {...props}
                setCart={clearCart}   // ✅ CLEAN RESET FUNCTION PASS
              />
            )}
          </Stack.Screen>

        </Stack.Navigator>

      </NavigationContainer>

    </PaperProvider>
  );
};

export default App;