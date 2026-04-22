import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Menu } from 'react-native-paper'; // ✅ Sirf Menu import

const MyMenu = ({ onDelete }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableOpacity onPress={openMenu}>
            <Text style={{ fontSize: 30 }}>⋯</Text>
          </TouchableOpacity>
        }
      >
        <Menu.Item
          onPress={() => {
            closeMenu();
            onDelete();
          }}
          title="Delete"
        />

        <Menu.Item onPress={closeMenu} title="Cancel" />
      </Menu>
    </View>
  );
};

export default MyMenu;