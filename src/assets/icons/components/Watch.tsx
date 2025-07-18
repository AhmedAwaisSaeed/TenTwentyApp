import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

interface WatchProps extends SvgProps {
  fill?: string;
}

const SvgWatch = ({ fill, ...props }: WatchProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    viewBox="18"
    {...props}
  >
    <Path
      fill={fill}
      d="M16.817 1.163A4.08 4.08 0 0 0 13.972 0H4.007C2.927 0 1.93.415 1.163 1.183A3.94 3.94 0 0 0 0 4.007v9.965c0 1.08.415 2.076 1.183 2.845A3.97 3.97 0 0 0 4.028 18h9.944c1.08 0 2.076-.415 2.845-1.183A3.97 3.97 0 0 0 18 13.972V4.007a4.2 4.2 0 0 0-1.183-2.844M12.29 9.509l-5.211 3.01a.48.48 0 0 1-.291.083.48.48 0 0 1-.29-.083.59.59 0 0 1-.291-.519V5.98c0-.208.103-.416.29-.52a.62.62 0 0 1 .602 0l5.211 3.01c.187.104.291.312.291.52a.61.61 0 0 1-.311.519"
    />
  </Svg>
);

export default SvgWatch;
