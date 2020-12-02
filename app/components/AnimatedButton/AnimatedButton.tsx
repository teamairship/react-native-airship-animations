import React, { useState } from 'react';
import { Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type Props = {
  toScaleValue?: number;
  friction?: number;
  tension?: number;
  colorTransitionDuration?: number;
  backgroundColorStart: string;
  backgroundColorEnd: string;
  isPressed?: boolean;
  onPress?: () => {};
};

export const AnimatedButton: React.FC<Props> = ({
  toScaleValue = 0.5,
  friction = 3,
  tension = 80,
  colorTransitionDuration = 300,
  backgroundColorStart,
  backgroundColorEnd,
  isPressed,
  onPress,
  children,
}) => {
  const [pressed, setPressed] = useState(isPressed ? isPressed : false);
  const pressedAnimatedValue = new Animated.Value(0);
  const scale = new Animated.Value(1);

  const outPutColor = !pressed
    ? [backgroundColorStart, backgroundColorEnd]
    : [backgroundColorEnd, backgroundColorStart];

  const colorInterpolation = pressedAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: outPutColor,
  });

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: toScaleValue,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction,
      tension,
      useNativeDriver: true,
    }).start();
    Animated.timing(pressedAnimatedValue, {
      toValue: 1,
      duration: colorTransitionDuration,
      useNativeDriver: true,
    }).start((status) => {
      if (status.finished) {
        setPressed((prev) => !prev);
        if (onPress) {
          onPress();
        }
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
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};
