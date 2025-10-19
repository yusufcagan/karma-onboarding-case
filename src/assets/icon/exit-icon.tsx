import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ExitIcon(props: SvgProps) {
  return (
    <Svg width={67} height={68} viewBox="0 0 67 68" fill="none" {...props}>
      <Path
        d="M41.875 23.377v-5.234a5.234 5.234 0 00-5.234-5.234H11.516a5.235 5.235 0 00-5.235 5.234V49.55a5.234 5.234 0 005.235 5.235H36.64a5.235 5.235 0 005.234-5.235v-5.234m8.375-20.938l10.469 10.47m0 0L50.25 44.314m10.469-10.469H24.994"
        stroke="#8A4BFF"
        strokeWidth={4.1875}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ExitIcon;
