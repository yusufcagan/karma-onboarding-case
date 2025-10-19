import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ContactIcon(props: SvgProps) {
  return (
    <Svg width={54} height={54} viewBox="0 0 54 54" fill="none" {...props}>
      <Path
        d="M27 3C13.746 3 3 13.746 3 27s10.746 24 24 24 24-10.746 24-24S40.254 3 27 3z"
        stroke="#8A4BFF"
        strokeWidth={4.17391}
        strokeMiterlimit={10}
      />
      <Path
        d="M23.348 23.348h4.174v15.13"
        stroke="#8A4BFF"
        strokeWidth={4.17391}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.782 39h11.479"
        stroke="#8A4BFF"
        strokeWidth={4.17391}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M27 11.609a3.391 3.391 0 100 6.783 3.391 3.391 0 000-6.783z"
        fill="#8A4BFF"
      />
    </Svg>
  );
}

export default ContactIcon;
