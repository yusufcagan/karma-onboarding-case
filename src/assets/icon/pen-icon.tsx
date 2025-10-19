import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function PenIcon(props: SvgProps) {
  return (
    <Svg width={73} height={73} viewBox="0 0 73 73" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.904 32.142l2.427-3.029c1.11-1.43 1.505-3.081 1.135-4.764-.32-1.53-1.259-2.984-2.666-4.087l-3.43-2.733c-2.987-2.382-6.69-2.131-8.812.602l-2.34 2.906a.72.72 0 00.101 1.008l3.97 3.217c3.011 2.442 6.752 5.474 8.628 6.993a.695.695 0 00.987-.113zm-6.489 20.966h13.282c1.296 0 2.35 1.071 2.35 2.387 0 1.32-1.054 2.387-2.35 2.387H41.415c-1.295 0-2.35-1.068-2.35-2.387 0-1.316 1.055-2.387 2.35-2.387z"
        fill="#D7D9FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.161 25.052l12.623 10.236a.73.73 0 01.119 1.007L29.938 55.864a4.906 4.906 0 01-3.812 1.918l-8.17.1a.932.932 0 01-.915-.731l-1.857-8.101c-.322-1.49 0-3.029.94-4.215l15.04-19.662a.698.698 0 01.997-.121"
        fill="#8A4BFF"
      />
    </Svg>
  );
}

export default PenIcon;
