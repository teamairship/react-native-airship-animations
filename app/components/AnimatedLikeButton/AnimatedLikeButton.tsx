import React, { useState } from 'react';
import { Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { useTheme } from '../../context/ThemeContext';
import ThumbsUpSVG from './SVG/ThumbsUpSVG';

const AnimatedLikeButton: React.FC<{}> = () => {
  const [pressed, setPressed] = useState(false);
  const pressedAnimatedValue = new Animated.Value(0);
  const scale = new Animated.Value(1);
  const { colors } = useTheme();

  const backgroundColorStart =
    colors.background === '#FFFFFF' ? 'rgb(255,255,255)' : 'rgb(26,34,55)';

  const outPutColor = !pressed
    ? [backgroundColorStart, 'rgb(255,42,19)']
    : ['rgb(255,42,19)', backgroundColorStart];

  const colorInterpolation = pressedAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: outPutColor,
  });

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 80,
      useNativeDriver: true,
    }).start();
    Animated.timing(pressedAnimatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start((status) => {
      if (status.finished) {
        setPressed((prev) => !prev);
      }
    });
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={{
          transform: [{ scale }],
        }}>
        <ThumbsUpSVG
          height={54}
          width={63}
          stroke={colors.primary}
          fillColor={colorInterpolation}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default AnimatedLikeButton;
