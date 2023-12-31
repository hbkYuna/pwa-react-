import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarElement}>Top</Text>
      <Text style={styles.navbarElement}>New</Text>
      <Text style={styles.navbarElement}>Popular</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#708090',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 50,
      },
      
  navbarElement: {
    color: '#ffffff',
    marginRight: 16,
    fontSize: 16,
  },
});

export default Navbar;
