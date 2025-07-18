import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

interface DashboardProps extends SvgProps {
  fill?: string;
}

const SvgDashboard = ({ fill, ...props }: DashboardProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <Circle cx={13} cy={3} r={3} fill={fill} />
    <Circle cx={13} cy={13} r={3} fill={fill} />
    <Circle cx={3} cy={13} r={3} fill={fill} />
    <Circle cx={3} cy={3} r={3} fill={fill} />
  </Svg>
);

export default SvgDashboard;
