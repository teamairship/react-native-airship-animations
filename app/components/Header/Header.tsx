/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MenuIcon } from '../../assets/MenuIcon';
import { MoonIcon } from '../../assets/MoonIcon';
import { SunIcon } from '../../assets/SunIcon';
import { useTheme } from '../../context/ThemeContext';

type Props = {
  onLeftPress?: () => void;
  onRightPress?: () => void;
  title?: string;
};

export const Header: FC<Props> = ({ onLeftPress, title }) => {
  const { colors, isDark, setScheme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}>
      <TouchableOpacity onPress={onLeftPress}>
        <MenuIcon color={colors.text} />
      </TouchableOpacity>
      <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
      <TouchableOpacity onPress={() => setScheme(isDark ? 'light' : 'dark')}>
        {isDark ? (
          <MoonIcon color={colors.text} />
        ) : (
          <SunIcon color={colors.text} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    letterSpacing: 0.32,
  },
});
