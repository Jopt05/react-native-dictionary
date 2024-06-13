import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

export const App = () => {
  return (
    <SafeAreaView style={{
      paddingHorizontal: 20
    }}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;