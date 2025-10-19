import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function GlobalIcon(props: SvgProps) {
  return (
    <Svg width={63} height={63} viewBox="0 0 63 63" fill="none" {...props}>
      <Path
        d="M31.5 5.906c-14.134 0-25.594 11.46-25.594 25.594S17.366 57.094 31.5 57.094 57.094 45.634 57.094 31.5 45.634 5.906 31.5 5.906z"
        stroke="#8A4BFF"
        strokeWidth={3.9375}
        strokeMiterlimit={10}
      />
      <Path
        d="M31.5 5.906c-7.146 0-13.864 11.46-13.864 25.594S24.354 57.094 31.5 57.094c7.145 0 13.863-11.46 13.863-25.594S38.645 5.906 31.5 5.906z"
        stroke="#8A4BFF"
        strokeWidth={3.9375}
        strokeMiterlimit={10}
      />
      <Path
        d="M14.437 14.437c4.705 3.34 10.629 5.333 17.063 5.333 6.434 0 12.357-1.992 17.063-5.333m0 34.126c-4.706-3.341-10.63-5.333-17.063-5.333-6.434 0-12.358 1.992-17.063 5.333"
        stroke="#8A4BFF"
        strokeWidth={3.9375}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M31.5 5.906v51.188M57.094 31.5H5.906"
        stroke="#8A4BFF"
        strokeWidth={3.9375}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default GlobalIcon;
