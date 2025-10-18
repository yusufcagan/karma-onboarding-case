import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function CloseIcon(props: SvgProps) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <Path
        d="M34.733 27.798L54.145 8.386A4.908 4.908 0 1047.21 1.44L27.798 20.85 8.386 1.439A4.912 4.912 0 101.44 8.386L20.85 27.798 1.439 47.21a4.913 4.913 0 006.947 6.947l19.412-19.412L47.21 54.157a4.912 4.912 0 006.947-6.947L34.733 27.798z"
        fill="#fff"
      />
    </Svg>
  );
}

export default CloseIcon;
