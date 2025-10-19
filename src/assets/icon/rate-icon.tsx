import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function RateIcon(props: SvgProps) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <Path
        d="M53 28C53 14.198 41.802 3 28 3S3 14.198 3 28s11.198 25 25 25 25-11.198 25-25z"
        stroke="#8A4BFF"
        strokeWidth={4.16667}
        strokeMiterlimit={10}
      />
      <Path
        d="M28 41.542c-.418 0-.826-.127-1.172-.362-5.117-3.474-7.333-5.86-8.555-7.345-2.604-3.174-3.851-6.433-3.815-9.961.04-4.045 3.284-7.335 7.23-7.335 2.657 0 4.558 1.384 5.743 2.658a.78.78 0 001.136 0c1.186-1.274 3.085-2.658 5.742-2.658 3.946 0 7.19 3.29 7.23 7.335.037 3.528-1.212 6.788-3.815 9.96-1.221 1.49-3.438 3.872-8.555 7.346a2.084 2.084 0 01-1.169.362z"
        fill="#8A4BFF"
      />
    </Svg>
  );
}

export default RateIcon;
