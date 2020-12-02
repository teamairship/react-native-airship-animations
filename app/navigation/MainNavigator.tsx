import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { SegmentedControlScreen } from '../screens/SegmentedControlScreen';
import { Home } from '../screens/Home';
import { useTheme } from '../context/ThemeContext';
import { darkColors, lightColors } from '../theme/Colors';
import LikeButtonScreen from '../screens/LikeButtonScreen';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => {
  const { colors } = useTheme();
  const drawerTheme = {
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: lightColors.primary,
      text: colors.text,
    },
  };
  return (
    <NavigationContainer theme={drawerTheme}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerStyle={{ backgroundColor: colors.background }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen
          name="Segmented Control"
          component={SegmentedControlScreen}
        />
        <Drawer.Screen name="Like Button" component={LikeButtonScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
