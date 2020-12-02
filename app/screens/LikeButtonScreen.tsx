import React from 'react';
import { View } from 'react-native';
import AnimatedLikeButton from '../components/AnimatedLikeButton/AnimatedLikeButton';
import { AnimationView } from '../components/AnimationView/AnimationView';

const LikeButtonScreen = () => {
  return (
    <AnimationView>
      <View style={{ alignItems: 'center' }}>
        <AnimatedLikeButton />
      </View>
    </AnimationView>
  );
};

export default LikeButtonScreen;
