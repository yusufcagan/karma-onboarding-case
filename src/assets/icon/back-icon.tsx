import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function BackIcon(props: SvgProps) {
  return (
    <Svg width={23} height={40} viewBox="0 0 23 40" fill="none" {...props}>
      <Path
        d="M20 3L3 20l17 17"
        stroke={props.color ? props.color : '#000'}
        strokeWidth={5.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackIcon;
