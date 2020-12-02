import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { SegmentedControl } from '../components/SegmentedControl/SegmentedControl';
import { AnimationView } from '../components/AnimationView/AnimationView';

export const SegmentedControlScreen = () => {
  const { colors } = useTheme();
  const [currIdx, setCurrIdx] = useState(0);
  const [currIdx2, setCurrIdx2] = useState(0);
  const [currIdx3, setCurrIdx3] = useState(0);
  const styles = StyleSheet.create({
    segmentContainer: {
      backgroundColor: colors.background3,
    },
    segmentContainerCustom: {
      backgroundColor: colors.background3,
      borderRadius: 50,
    },
    textStyle: {
      color: colors.text,
    },
    activeContainer: {borderRadius: 50},
  });
  return (
    <AnimationView>
      <SegmentedControl
        tabs={['First', 'Second']}
        onChange={(idx) => setCurrIdx(idx)}
        currentIndex={currIdx}
        activeSegmentBackgroundColor={colors.background}
        containerStyle={styles.segmentContainer}
        textStyle={styles.textStyle}
      />
      <SegmentedControl
        tabs={['First', 'Second', 'Third']}
        onChange={(idx) => setCurrIdx2(idx)}
        currentIndex={currIdx2}
        activeSegmentBackgroundColor={colors.background}
        containerStyle={styles.segmentContainer}
        textStyle={styles.textStyle}
      />
      <SegmentedControl
        tabs={['First', 'Second']}
        onChange={(idx) => setCurrIdx3(idx)}
        currentIndex={currIdx3}
        activeSegmentBackgroundColor={colors.orange}
        containerStyle={styles.segmentContainerCustom}
        textStyle={styles.textStyle}
        activeTextColor={'#FFF'}
        activeContainerStyles={styles.activeContainer}
      />
    </AnimationView>
  );
};
