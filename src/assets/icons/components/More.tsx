import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

interface MoreProps extends SvgProps {
  fill?: string;
}

const SvgMore = ({ fill, ...props }: MoreProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 19 14"
    {...props}
  >
    <Path
      fill={fill}
      d="M.466 7.133a1 1 0 0 0 1 1h1.062a1 1 0 0 0 1-1v-.17a1 1 0 0 0-1-1H1.466a1 1 0 0 0-1 1zm0 4.997a1 1 0 0 0 1 1h1.062a1 1 0 0 0 1-1v-.28a1 1 0 0 0-1-1H1.466a1 1 0 0 0-1 1zm0-10.06a1 1 0 0 0 1 1h1.062a1 1 0 0 0 1-1v-.082a1 1 0 0 0-1-1H1.466a1 1 0 0 0-1 1zm4.593 5.063a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-.17a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1zm0 4.997a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-.28a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1zm1-11.142a1 1 0 0 0-1 1v.082a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-.082a1 1 0 0 0-1-1z"
    />
  </Svg>
);
export default SvgMore;
