import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

export const MenuIcon: FC<Props> = ({ color = '#000', size = 15 }) => (
  <View>
    <Svg width={size * (22 / 15)} height={size} viewBox="0 0 22 15">
      <Path
        d="M3 6h17v2.5H3V6m0 6.25h22v2.5H3v-2.5m0 6.25h17V21H3z"
        transform="translate(-3 -6)"
        fill={color}
      />
    </Svg>
  </View>
);
