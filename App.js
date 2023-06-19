import React from 'react';
import { View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Navbar from './src/components/Navbar';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <HomeScreen />
    </View>
  );
};

export default App;