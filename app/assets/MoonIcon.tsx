import React, { FC } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
  size?: number;
};

export const MoonIcon: FC<Props> = ({ color = '#000', size = 24 }) => (
  <View>
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M13 9C13 7.02543 13.8205 5.18477 15.2398 3.86765L16.7174 2.49647L14.7317 2.14956C14.1634 2.05029 13.5847 2 13 2C7.47715 2 3 6.47715 3 12C3 17.5228 7.47715 22 13 22C16.3854 22 19.4843 20.3038 21.3266 17.5396L22.4432 15.8643L20.4336 15.9868C20.2898 15.9956 20.1452 16 20 16C16.134 16 13 12.866 13 9ZM13 20C8.58172 20 5 16.4183 5 12C5 7.74791 8.31735 4.27062 12.5051 4.01506C11.5367 5.46848 11 7.19184 11 9C11 13.439 14.2137 17.1274 18.4414 17.8655C16.9878 19.2153 15.061 20 13 20Z"
        fill={color}
      />
    </Svg>
  </View>
);
