import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function RefreshIcon(props: SvgProps) {
  return (
    <Svg width={66} height={66} viewBox="0 0 66 66" fill="none" {...props}>
      <Path
        d="M29.415 24.518s-1.547-.763 4.065-.763a10.162 10.162 0 11-10.162 10.163"
        stroke="#8A4BFF"
        strokeWidth={3.55691}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M33.48 18.928l-5.081 5.081 5.08 5.081"
        stroke="#8A4BFF"
        strokeWidth={3.55691}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.48 8.13c13.466 0 24.39 10.925 24.39 24.39 0 13.466-10.924 24.391-24.39 24.391-13.465 0-24.39-10.925-24.39-24.39 0-13.466 10.925-24.39 24.39-24.39z"
        stroke="#8A4BFF"
        strokeWidth={4.06504}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default RefreshIcon;
