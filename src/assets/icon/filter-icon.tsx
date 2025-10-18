import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function FilterIcon(props: SvgProps) {
  return (
    <Svg width={82} height={46} viewBox="0 0 82 46" fill="none" {...props}>
      <Path
        d="M76.978 8.103H4.051a4.051 4.051 0 110-8.103h72.927a4.051 4.051 0 010 8.103zM63.473 27.01H17.556a4.051 4.051 0 010-8.103h45.917a4.052 4.052 0 010 8.103zM47.267 45.917H33.762a4.051 4.051 0 110-8.103h13.505a4.051 4.051 0 010 8.103z"
        fill="#8A4BFF"
      />
    </Svg>
  );
}

export default FilterIcon;
