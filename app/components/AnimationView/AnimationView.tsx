/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Header } from '../../components/Header/Header';
import { useNavigation, useRoute } from '@react-navigation/native';

type Props = {
  children: any;
};

export const AnimationView: FC<Props> = ({ children }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header onLeftPress={() => navigation.openDrawer()} title={route.name} />
      <View style={{ flex: 1, justifyContent: 'center' }}>{children}</View>
    </View>
  );
};
