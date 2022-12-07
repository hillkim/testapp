import * as React from 'react';
import Svg, {SvgProps, LinearGradient, Stop, G, Path} from 'react-native-svg';

const RocketIcon = (props: SvgProps) => (
  <Svg fill="none" height={27} width={27} {...props}>
    <LinearGradient
      id="d"
      gradientUnits="userSpaceOnUse"
      x1={21.606}
      x2={31.53}
      y1={-6.251}
      y2={22.046}>
      <Stop offset={0} stopColor="#344ea6" stopOpacity={0.26} />
      <Stop offset={0.505} stopColor="#587eff" stopOpacity={0.12} />
      <Stop offset={1} stopColor="#829eff" stopOpacity={0.04} />
    </LinearGradient>
    <LinearGradient
      id="e"
      gradientUnits="userSpaceOnUse"
      x1={16.857}
      x2={21.624}
      y1={3.456}
      y2={16.409}>
      <Stop offset={0} stopColor="#fff" stopOpacity={0.15} />
      <Stop offset={1} stopColor="#fff" stopOpacity={0.44} />
    </LinearGradient>
    <G filter="url(#a)">
      <Path
        d="m3.394 13.748 3.182-3.182a1 1 0 0 1 .849-.283l2.838.27a.1.1 0 0 1 .082.141l-2.113 4.528a1 1 0 0 1-1.013.572l-3.26-.349a1 1 0 0 1-.565-1.697z"
        fill="#3b68ff"
      />
    </G>
    <G filter="url(#b)">
      <Path
        d="m13.293 23.648 3.182-3.182a1 1 0 0 0 .283-.849l-.27-2.839a.1.1 0 0 0-.141-.08l-4.528 2.112a1 1 0 0 0-.571 1.013l.348 3.26a1 1 0 0 0 1.697.565z"
        fill="#3b68ff"
      />
    </G>
    <G filter="url(#c)" shapeRendering="crispEdges">
      <Path
        d="m7.881 16.821 2.339 2.34c.575.575 1.44.744 2.17.386 1.733-.85 4.918-2.587 6.914-4.738 2.224-2.398 3.05-6.196 3.357-8.537a1.663 1.663 0 0 0-1.892-1.892c-2.341.306-6.139 1.134-8.537 3.358-2.15 1.995-3.888 5.18-4.738 6.912-.358.731-.188 1.596.387 2.171z"
        fill="url(#d)"
      />
      <Path
        d="m10.308 19.072-2.339-2.34c-.54-.54-.696-1.347-.362-2.027.848-1.73 2.578-4.897 4.71-6.876 2.368-2.195 6.13-3.019 8.468-3.325a1.538 1.538 0 0 1 1.752 1.752c-.306 2.338-1.13 6.1-3.325 8.468-1.978 2.133-5.145 3.862-6.876 4.71-.68.334-1.488.178-2.028-.362z"
        stroke="url(#e)"
        strokeOpacity={0.7}
        strokeWidth={0.25}
      />
    </G>
    <G filter="url(#f)">
      <Path
        d="M14.707 9.506a2 2 0 1 0 2.828 2.828 2 2 0 0 0-2.828-2.828z"
        fill="#3b68ff"
      />
    </G>
    <G filter="url(#g)">
      <Path
        d="M7.46 20.642a.75.75 0 0 0-1.06-1.06zM3.57 22.41a.75.75 0 0 0 1.061 1.06zm1.768-3.889a.75.75 0 0 0-1.06-1.06zm-2.474.354a.75.75 0 0 0 1.06 1.06zm6.717 3.889a.75.75 0 0 0-1.06-1.061zm-2.475.353a.75.75 0 0 0 1.06 1.06zM6.4 19.582 3.571 22.41l1.06 1.06 2.829-2.828zM4.278 17.46l-1.414 1.415 1.06 1.06 1.414-1.414zm4.242 4.243-1.414 1.414 1.06 1.06 1.415-1.413z"
        fill="#3b68ff"
      />
    </G>
  </Svg>
);

export default RocketIcon;
