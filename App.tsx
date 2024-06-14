import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';

export const App = () => {
  return (
    <SafeAreaView style={{
      paddingHorizontal: 20,
      marginVertical: 40
    }}>
      <ScrollView>
        <HomeScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;