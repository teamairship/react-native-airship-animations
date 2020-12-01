import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Value,
  useCode,
  startClock,
  set,
  block,
  timing,
  Easing,
  cond,
  eq,
  not,
  clockRunning,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useClock, useValue } from 'react-native-redash';
import Airship from './SVG/Airship';
const runTiming = (clock: any, duration: any) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0),
  };
  const config = {
    toValue: new Value(1),
    duration,
    easing: Easing.inOut(Easing.ease),
  };
  return block([
    timing(clock, state, config),
    cond(eq(state.finished, 1), [
      set(state.finished, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.toValue, not(state.position)),
    ]),
    state.position,
  ]);
};
const AirshipFloating = () => {
  const airshipClock = useClock();
  const cloudsClock = useClock();
  const airshipProgress = useValue(0);
  const cloudsProgress = useValue(0);
  const airshipPositionY = interpolate(airshipProgress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
    extrapolate: Extrapolate.CLAMP,
  });
  useCode(
    () => [
      cond(not(clockRunning(airshipClock)), startClock(airshipClock)),
      set(airshipProgress, runTiming(airshipClock, 2000)),
      cond(not(clockRunning(cloudsClock)), startClock(cloudsClock)),
      set(cloudsProgress, runTiming(cloudsClock, 8000)),
    ],
    [],
  );
  return (
    <View style={styles.container}>
      <View style={styles.airshipContainer}>
        <Animated.View
          style={[
            styles.airship,
            { transform: [{ translateY: airshipPositionY }] },
          ]}>
          <Airship fillColor="#FF2A13" />
        </Animated.View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  airship: {
    height: 180,
    width: 180,
  },
  airshipContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  clouds: {
    height: 500,
    marginTop: 100,
    width: 500,
  },
  cloudsContainer: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    zIndex: -10,
  },
  container: {},
});
export default AirshipFloating;
