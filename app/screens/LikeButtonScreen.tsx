import React from 'react';
import { View } from 'react-native';
import { AnimatedLikeButton } from '../components/AnimatedLikeButton/AnimatedLikeButton';
import { AnimationView } from '../components/AnimationView/AnimationView';
import { useTheme } from '../context/ThemeContext';

// ** NOTE: Colors sent to animated button must be rgb NOT hexes
const LikeButtonScreen = () => {
  const { colors } = useTheme();

  const backgroundColorStart =
    colors.background === '#FFFFFF' ? 'rgb(255,255,255)' : 'rgb(26,34,55)';

  return (
    <AnimationView>
      <View style={{ alignItems: 'center' }}>
        <AnimatedLikeButton
          primaryColor={colors.primary}
          backgroundColorStart={backgroundColorStart}
          backgroundColorEnd={'rgb(255, 42, 19)'}
        />
      </View>
    </AnimationView>
  );
};

export default LikeButtonScreen;
