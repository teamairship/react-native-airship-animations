import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SegmentedControlScreen } from '../screens/SegmentedControlScreen';
import { Home } from '../screens/Home';

const Drawer = createDrawerNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen
        name="Segmented Control"
        component={SegmentedControlScreen}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
