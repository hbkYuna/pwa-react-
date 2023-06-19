import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar />
      <HomeScreen />
    </View>
  );
};

export default App;