

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartSummary from '../components/CartSummary';
import Mymenu from '../components/Mymenu'; // 👈 IMPORT MENU

const CarsScreen = ({ cart = [], setCart }) => {

  const navigation = useNavigation();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🗑️ REMOVE ITEM FUNCTION
  const removeItem = (indexToRemove) => {
    setCart((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <View style={{ flex: 1 }}>

      {/* CART LIST */}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>🛒 My Cart</Text>

        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <>
            {cart.map((item, index) => (
              <View key={index} style={styles.card}>

                {/* 🔥 MENU (3 DOTS) */}
                <View style={styles.menuBtn}>
                  <Mymenu onDelete={() => removeItem(index)} />
                </View>

                <Text style={styles.name}>{item.name}</Text>

                <View style={styles.row}>
                  <Text style={styles.label}>Quantity:</Text>
                  <Text style={styles.value}>{item.quantity}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Price:</Text>
                  <Text style={styles.value}>Rs {item.price}</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.label}>Subtotal:</Text>
                  <Text style={styles.totalItem}>
                    Rs {item.price * item.quantity}
                  </Text>
                </View>

              </View>
            ))}

            {/* TOTAL BOX */}
            <View style={styles.totalBox}>
              <Text style={styles.totalText}>
                Total: Rs {total}
              </Text>
            </View>

          </>
        )}

      </ScrollView>

      {/* BOTTOM BAR */}
      {cart.length > 0 && (
        <CartSummary total={total} navigation={navigation} />
      )}

    </View>
  );
};

export default CarsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#888',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
    position: 'relative',
  },

  // 🔥 MENU POSITION
  menuBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },

  label: {
    color: '#666',
  },

  value: {
    fontWeight: '600',
  },

  totalItem: {
    fontWeight: 'bold',
    color: 'green',
  },

  totalBox: {
    marginTop: 10,
    padding: 15,
    backgroundColor: '#000000',
    borderRadius: 10,
  },

  totalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});