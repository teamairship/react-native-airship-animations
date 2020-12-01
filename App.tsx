import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { ThemeProvider } from './app/context/ThemeContext';
import { MainNavigator } from './app/navigation/MainNavigator';

const App = () => (
  <AppearanceProvider>
    <ThemeProvider>
      <MainNavigator />
    </ThemeProvider>
  </AppearanceProvider>
);

export default App;
