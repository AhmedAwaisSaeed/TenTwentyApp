import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

interface MediaLibraryProps extends SvgProps {
  fill?: string;
}

const SvgMediaLibrary = ({ fill, ...props }: MediaLibraryProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <Rect y={3.474} width={18} height={14.526} rx={0.947} fill={fill} />
    <Path
      d="M16.105 1.579c.505 0 .632.526.632.79H.947c0-.632.421-.79.632-.79zM15.246 0c.435 0 .543.421.543.632H2.21c0-.506.363-.632.544-.632z"
      fill={fill}
    />
  </Svg>
);

export default SvgMediaLibrary;
