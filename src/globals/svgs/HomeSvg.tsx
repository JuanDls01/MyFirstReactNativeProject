import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => {
  return (
    <Svg width={16} height={18} {...props}>
      <Path
        fill={props.color}
        d="M1.5 16.5h3.75v-6.25h5.5v6.25h3.75V6.75L8 1.875 1.5 6.75v9.75ZM0 18V6l8-6 8 6v12H9.25v-6.25h-2.5V18H0Z"
      />
    </Svg>
  );
};
export default SvgComponent;
