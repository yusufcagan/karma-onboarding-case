import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function SecurityIcon(props: SvgProps) {
  return (
    <Svg width={54} height={62} viewBox="0 0 54 62" fill="none" {...props}>
      <Path
        d="M22.695 32.121l-5.641-5.64-3.071 3.07 8.712 8.712L40.119 20.84l-3.071-3.071L22.695 32.12z"
        fill="#2FD040"
      />
      <Path
        d="M27.05 61.328L13.6 54.156A23.919 23.919 0 01.914 33.014V4.7A4.36 4.36 0 015.27.344h43.56A4.36 4.36 0 0153.186 4.7v28.314a23.92 23.92 0 01-12.685 21.142l-13.45 7.172zM5.27 4.7v28.314A19.569 19.569 0 0015.65 50.31l11.4 6.08 11.4-6.077a19.57 19.57 0 0010.38-17.3V4.7H5.27z"
        fill="#2FD040"
      />
    </Svg>
  );
}

export default SecurityIcon;
