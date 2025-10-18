import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function HomeIcon(props: SvgProps) {
  return (
    <Svg width={71} height={70} viewBox="0 0 71 70" fill="none" {...props}>
      <Path
        d="M35.5 0C16.201 0 .5 15.7.5 35c0 19.298 15.701 35 35 35s35-15.702 35-35c0-19.3-15.701-35-35-35zm13.462 37.692h-10.77v10.77a2.692 2.692 0 11-5.384 0v-10.77h-10.77a2.692 2.692 0 110-5.385h10.77V21.538a2.692 2.692 0 115.384 0v10.77h10.77a2.692 2.692 0 010 5.384z"
        fill={props.color}
      />
    </Svg>
  );
}

export default HomeIcon;
