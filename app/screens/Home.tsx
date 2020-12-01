import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AnimationView } from '../components/AnimationView/AnimationView';
import AirshipFloating from '../components/AirshipFloating/AirshipFloating';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      letterSpacing: 0.32,
      alignSelf: 'center',
      color: colors.text,
    },
    btn: {
      backgroundColor: colors.primary,
      width: 200,
      height: 50,
      borderRadius: 6,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
    },
    btnText: {
      color: '#FFF',
      fontWeight: '700',
      letterSpacing: 0.28,
    },
  });
  return (
    <AnimationView>
      <Text style={styles.header}>Airship Animations</Text>
      <AirshipFloating />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.openDrawer()}>
        <Text style={styles.btnText}>View Components</Text>
      </TouchableOpacity>
    </AnimationView>
  );
};
