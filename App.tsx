import * as React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { ThemeProvider } from './src/context/themeContext';

export const App = () => {
  return (
    <SafeAreaView>
      <AppState>
        <ScrollView>
          <HomeScreen />
        </ScrollView>
      </AppState>
    </SafeAreaView>
  );
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;