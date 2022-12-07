import * as React from 'react';
import Svg, {
  SvgProps,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  RadialGradient,
  G,
} from 'react-native-svg';

const SvgComponent = (props: SvgProps) => (
  <Svg viewBox="0 0 128 128" {...props}>
    <LinearGradient
      id="b"
      gradientUnits="userSpaceOnUse"
      x1={64}
      x2={64}
      y1={91.934}
      y2={117.36}>
      <Stop offset={0} stopColor="#ffe082" />
      <Stop offset={0.314} stopColor="#ffd965" />
      <Stop offset={1} stopColor="#ffca28" />
    </LinearGradient>
    <ClipPath id="c">
      <Path d="M4 71.77h120v52.11H4z" />
    </ClipPath>
    <LinearGradient
      id="d"
      gradientUnits="userSpaceOnUse"
      x1={64}
      x2={64}
      y1={63.922}
      y2={93.187}>
      <Stop offset={0} stopColor="#00acc1" />
      <Stop offset={0.075} stopColor="#13b1c4" />
      <Stop offset={0.433} stopColor="#68cad0" />
      <Stop offset={0.685} stopColor="#9dd9d8" />
      <Stop offset={0.808} stopColor="#b2dfdb" />
      <Stop offset={1} stopColor="#b2dfdb" />
    </LinearGradient>
    <LinearGradient
      id="e"
      gradientUnits="userSpaceOnUse"
      x1={28.382}
      x2={28.382}
      y1={95.794}
      y2={113.08}>
      <Stop offset={0} stopColor="#ff9e80" />
      <Stop offset={1} stopColor="#ff3d00" />
    </LinearGradient>
    <LinearGradient
      id="f"
      gradientUnits="userSpaceOnUse"
      x1={70.258}
      x2={70.258}
      y1={94.602}
      y2={47.95}>
      <Stop offset={0} stopColor="#ef5350" />
      <Stop offset={1} stopColor="#e53935" />
    </LinearGradient>
    <LinearGradient id="a">
      <Stop offset={0} stopColor="#ef5350" />
      <Stop offset={1} stopColor="#d32f2f" />
    </LinearGradient>
    <RadialGradient
      id="g"
      cx={78.833}
      cy={7.256}
      gradientTransform="matrix(1 0 0 1.0004 0 -.028)"
      gradientUnits="userSpaceOnUse"
      r={47.974}
    />
    <LinearGradient
      id="h"
      gradientUnits="userSpaceOnUse"
      x1={72.242}
      x2={72.242}
      y1={29.074}
      y2={64.759}>
      <Stop offset={0} stopColor="#f5f5f5" />
      <Stop offset={1} stopColor="#bdbdbd" />
    </LinearGradient>
    <RadialGradient
      id="i"
      cx={77.667}
      cy={8.256}
      gradientTransform="matrix(1 0 0 1.0004 0 -.028)"
      gradientUnits="userSpaceOnUse"
      r={45.149}
    />
    <Path d="M4 71.89h120V124H4z" fill="url(#b)" />
    <G clipPath="url(#c)" opacity={0.3}>
      <Path
        d="M101.62 92.56c2.33.56 4.99.9 7.83.9 2.64 0 5.13-.27 7.34-.76.91-.2 1.82-.29 2.74-.31 1.1.61 2.75 1.04 4.47 1.39V73.99H4v18.27c.89.04 1.78.07 2.7.11 2.84.69 6.18 1.1 9.77 1.1 3.56 0 6.88-.4 9.71-1.08 1.35-.02 2.57-.04 3.64-.04 20.96 0-10.45 4.21-25.81 6.12v8.91c9.8.07 16.07.86 11.32 2.94-4.33 1.9-4.33 3.95 2.85 3.68 1.69-.06 3.77-.13 6.25-.42 11.7-1.37 13.43-3.61 3.47-4.98s-11.26-3.61-.72-6.01c6.07-1.39 12.96-3.23 15.3-3.23 1.73 0 1 1-4.33 3.91-5.31 2.9-4.15 3.97-.18 3.97 5.42 0 16.06-1.98 22.56-3.97 11.26-3.44 10.54-4.81-1.73-5.15-10.92-.31 2.84-3.6 13.94-3.6 1.38 0 2.72.05 3.97.16 11.26 1.03 17.47 1.72.14 6.01s-16.03 7.73-6.35 8.93 9.39 2.58-2.02 4.29c-4.8.72-8.67 1.14-11.07 1.14-3.31 0-3.81-.8-.04-2.69 3.51-1.76 3.65-2.87.6-2.87-2.6 0-7.5.81-14.61 2.7-10.3 2.75-8.34 3.44-3.5 3.44 2.42 0 5.57-.17 8.26-.34.5-.03.91-.05 1.24-.05 4.95 0-8.91 3.47-7.29 4.76.65.52 2.24.69 4.3.69 3.4 0 8.08-.48 11.95-.69 1.36-.07 2.47-.11 3.33-.11 3.05 0 2.81.48-1.25 1.42-3.31.77-2.76 1.39.57 1.39 1.9 0 4.72-.2 8.23-.7 9.68-1.37 9.1-2.41-.58-3.09-9.68-.69 14.3-2.92 24.41-4.64s12.13-2.41-9.82-4.47c-18.4-1.73-4.02-4.06 11.83-4.06 3.05 0 6.17.09 9.11.28 18.2 1.2 12.27 3.61 8.09 4.98-3.69 1.21-6.6 3.76-.12 3.76.87 0 1.92-.05 3.15-.15 1.96-.16 3.53-.24 4.75-.24 4.19 0 4.13.91 1.22 2.35-3.11 1.54-2.74 2.87.78 2.9.67.01 1.34 0 2-.01V98.24c-.17.04-.32.08-.5.12 0 0-1.73.18-4.78.18-4.2 0-10.9-.35-19.05-1.99-3.52-.7-1.27-2.28 1.93-3.99z"
        fill="#d7ccc8"
        opacity={0.3}
      />
    </G>
    <Path
      d="M27.32 93.03c4.06-2.81 8.37-3.52 12.6-2.46 2.75.68 5.66 1.05 8.68 1.05 4.82 0 9.38-.94 13.44-2.6 4.94-2.03 10.03-1.17 14.85 1.98 7.43 4.86 17.91 7.89 29.52 7.89 6.31 0 12.27-.91 17.6-2.51V71.93c0-4.42-3.58-8-8-8H12c-4.42 0-8 3.58-8 8V98.7c1.25.13 2.51.2 3.8.2 7.42 0 14.22-2.21 19.52-5.87z"
      fill="url(#d)"
    />
    <Path
      d="M106.4 94.9c-11.61 0-22.09-3.03-29.52-7.89-4.81-3.15-9.9-4.01-14.85-1.98-4.05 1.66-8.61 2.6-13.44 2.6-3.02 0-5.93-.37-8.68-1.05-4.24-1.05-8.55-.35-12.6 2.46-5.29 3.65-12.09 5.86-19.51 5.86-1.29 0-2.55-.07-3.8-.2v7.28c1.25.13 2.51.2 3.8.2 7.42 0 14.22-2.21 19.52-5.87 4.06-2.81 8.37-3.52 12.6-2.46 2.75.68 5.66 1.05 8.68 1.05 4.82 0 9.38-.94 13.44-2.6 4.94-2.03 10.03-1.17 14.85 1.98 7.43 4.86 17.91 7.89 29.52 7.89 6.31 0 12.27-.91 17.6-2.51v-7.28c-5.34 1.61-11.3 2.52-17.61 2.52z"
      fill="#fff"
      opacity={0.8}
    />
    <Path
      d="M116 66.92c2.7 0 4.94 2.2 4.99 4.91l.01.33v48.72H7V72.21l.01-.38c.05-2.7 2.29-4.91 4.99-4.91zm0-3H12a7.99 7.99 0 0 0-7.99 7.85H4v52.11h120V71.77h-.01a7.99 7.99 0 0 0-7.99-7.85z"
      fill="#424242"
      opacity={0.2}
    />
    <Path
      d="m16.72 106.56 7.14-2.12c.43-.13.72-.48.72-.88l.07-6.69c.01-.9 1.3-1.27 1.91-.55l4.48 5.38c.27.32.74.46 1.17.34l7.18-2.01c.97-.27 1.77.71 1.18 1.44l-4.37 5.45a.86.86 0 0 0 0 1.09l4.37 5.45c.59.73-.21 1.71-1.18 1.44l-7.18-2.01c-.43-.12-.9.01-1.17.34l-4.48 5.38c-.6.72-1.9.35-1.91-.55l-.07-6.69c0-.4-.29-.75-.72-.88l-7.14-2.12c-.96-.31-.96-1.52 0-1.81z"
      fill="url(#e)"
    />
    <Path
      d="m27.6 102.25 1.14 1.36c.77.93 1.92 1.46 3.15 1.46.38 0 .76-.05 1.13-.15l1.2-.34-.36.45a3.852 3.852 0 0 0 0 4.84l.36.45-1.2-.34c-.37-.1-.74-.15-1.13-.15-1.23 0-2.38.53-3.15 1.46l-1.14 1.36-.01-1.34c-.02-1.72-1.17-3.22-2.86-3.73l-.47-.14.47-.14c1.7-.5 2.85-2 2.86-3.73zm-1.88-6.31c-.54 0-1.06.36-1.07.93l-.07 6.69c0 .4-.29.75-.72.88l-7.14 2.12c-.96.29-.96 1.49 0 1.78l7.14 2.12c.43.13.72.48.72.88l.07 6.69c.01.57.53.93 1.07.93.31 0 .62-.12.84-.38l4.48-5.38c.2-.24.52-.38.85-.38.11 0 .21.01.32.04l7.18 2.01c.11.03.22.05.33.05.8 0 1.37-.84.85-1.49L36.19 108a.86.86 0 0 1 0-1.09l4.37-5.45c.52-.65-.04-1.49-.85-1.49-.11 0-.22.01-.33.05l-7.18 2.01c-.1.03-.21.04-.32.04-.33 0-.65-.14-.85-.38l-4.48-5.38c-.21-.26-.53-.37-.83-.37z"
      fill="#424242"
      opacity={0.2}
    />
    <Path
      d="M60.8 107.9a2.399 2.399 0 0 1-1.95-2.79L76.93 5.99c.23-1.31 1.48-2.18 2.79-1.95s2.19 1.48 1.95 2.79l-18.08 99.13a2.4 2.4 0 0 1-2.79 1.94z"
      fill="url(#f)"
    />
    <Path
      d="m120 52.85-.02-.6h-.01c.46-20.02-16.6-38.64-40.63-43.37-.04-.01-.08-.02-.11-.02-.03-.01-.06-.01-.09-.02.16.03.32.04.48.07-.14-.02-.28-.04-.42-.07.04.01.08.01.12.01-.09-.02-.18-.02-.26-.04l-.11-.03c-.04-.01-.08-.01-.12-.01-.09-.02-.18-.04-.28-.06.05.01.1.03.15.04-.18-.03-.37-.08-.55-.11.19.03.37.08.55.11h-.03c-24.3-3.88-46.83 7.8-53.28 26.84h-.01l-.23.56c-.5 1.23 2.15 3.46 5.93 4.99 3.24 1.31 6.25 1.67 7.36.98-.19 1.7 3.57 4.16 8.63 5.6 5.1 1.45 9.62 1.32 10.32-.26.9 2.41 6.5 5.09 13.59 6.34 7.08 1.25 13.27.64 14.94-1.31.12 1.72 4.32 3.38 9.61 3.76 5.18.37 9.5-.62 10.01-2.24.9.98 3.78 1.63 7.18 1.51 4.07-.15 7.33-1.34 7.28-2.67z"
      fill="url(#g)"
    />
    <Path
      d="M69.38 11.01c2.92 0 5.89.24 8.81.7l.1.02.06.01h.07c.01 0 .03.01.04.01l.04.01-.07-.02.12.03.09.02.12.03c10.95 2.16 20.86 7.5 27.88 15.05 6.76 7.27 10.42 16.09 10.33 24.9-.79.3-2.28.67-4.36.74-.24.01-.47.01-.71.01-2.36 0-3.83-.42-4.25-.65l-3.41-3.71-1.39 4.41c-.67.31-2.41.76-5.17.76-.63 0-1.28-.02-1.93-.07-3.55-.26-5.99-1.11-6.88-1.66l-.47-6.61-4.73 5.52c-.32.26-1.99.94-5.67.94-2 0-4.25-.21-6.49-.6-6.78-1.19-10.75-3.53-11.31-4.47l-2.56-6.87-2.7 6.1c-.27.06-.72.12-1.41.12-1.6 0-3.59-.32-5.63-.89-3.43-.97-5.66-2.31-6.4-3.03l.62-5.52-5.07 3.17c-.06.01-.16.01-.3.01-.88 0-2.53-.29-4.55-1.11-1.93-.78-3.2-1.63-3.84-2.19 5.32-15.06 21.74-25.16 41.02-25.16m0-3c-20.56 0-38.38 11-43.99 27.58h-.01l-.23.56c-.5 1.23 2.15 3.46 5.93 4.99 2.16.87 4.21 1.32 5.67 1.32.73 0 1.32-.11 1.69-.35-.19 1.7 3.57 4.16 8.63 5.6 2.38.68 4.64 1.01 6.44 1.01 2.05 0 3.5-.43 3.87-1.27.9 2.41 6.5 5.09 13.59 6.34 2.5.44 4.89.65 7.01.65 3.88 0 6.85-.7 7.93-1.96.12 1.72 4.32 3.38 9.61 3.76.74.05 1.46.08 2.15.08 4.18 0 7.42-.93 7.86-2.32.83.9 3.33 1.52 6.36 1.52.27 0 .54 0 .81-.01 4.08-.15 7.34-1.34 7.28-2.66l-.02-.6h-.01c.46-20.02-16.6-38.64-40.63-43.37-.04-.01-.08-.02-.11-.02-.03-.01-.06-.01-.09-.02.16.03.32.04.48.07-.14-.02-.28-.04-.42-.07.04.01.08.01.12.01-.09-.02-.18-.02-.26-.04l-.11-.03c-.04-.01-.08-.01-.12-.01-.09-.02-.18-.04-.28-.06.05.01.1.03.15.04-.18-.03-.37-.08-.55-.11.19.03.37.08.55.11h-.03c-3.12-.49-6.23-.74-9.27-.74z"
      fill="#424242"
      opacity={0.2}
    />
    <Path
      d="M105.64 52.96c2.85-21.2-8.85-39.36-26.63-42.92a.355.355 0 0 0-.1-.02c.06.01.13.01.19.02-.09-.02-.18-.02-.26-.04l-.11-.03c-.04-.01-.08-.01-.12-.01-.09-.02-.18-.04-.28-.06.07.01.13.03.19.05-.03 0-.05 0-.08-.01C60.51 7.19 43.28 20.26 38.7 41.17l-.23.77c-.49 1.7 3.37 4.29 8.61 5.78 5.1 1.45 9.62 1.32 10.32-.26.9 2.41 6.5 5.09 13.59 6.34 7.08 1.25 13.27.64 14.94-1.31.12 1.72 4.32 3.38 9.61 3.76 5.44.39 9.95-.72 10.07-2.49z"
      fill="url(#h)"
    />
    <Path
      d="m78.3 12.34.07.01.04.01h.01l-.05-.01.07.02.03.01.08.02c16.42 3.29 27.39 20.3 24.71 40.24l-.02.2-.01.23c-.91.48-3.6 1.07-7.52.79-.93-.07-1.84-.18-2.7-.33-2.68-.47-4.2-1.21-4.71-1.6l-4.57-2.75.37 1.75c-.63.7-5.18 1.83-12.69.51s-11.4-3.94-11.75-4.81l1.39-1.9-5.69 1.4c-.61.2-2.29.37-4.97-.1-.87-.15-1.76-.36-2.65-.61-3.79-1.07-6.1-2.55-6.8-3.31l.06-.23.03-.09.02-.1c4.31-19.67 20.46-31.91 37.03-29.37l.03.01h.03l.11.01h.05m.8-2.3c-.09-.02-.18-.02-.26-.04l-.11-.03c-.04-.01-.08-.01-.12-.01-.09-.02-.18-.04-.28-.06.07.01.13.03.19.05-.03 0-.05 0-.08-.01C60.51 7.19 43.28 20.26 38.7 41.17l-.23.77c-.49 1.7 3.37 4.29 8.61 5.78.99.28 1.97.5 2.89.67 3.83.67 6.87.34 7.43-.93.9 2.41 6.5 5.09 13.59 6.34 7.08 1.25 13.27.64 14.94-1.31.1 1.38 2.84 2.73 6.66 3.4.93.16 1.91.29 2.94.36 5.44.39 9.95-.72 10.07-2.49l.04-.8c2.85-21.2-8.85-39.36-26.63-42.92a.355.355 0 0 0-.1-.02c.07 0 .13 0 .19.02z"
      fill="#424242"
      opacity={0.2}
    />
    <Path
      d="M86.55 50.46c3.61-21.75.27-40.29-7.61-41.68-7.89-1.38-17.38 14.9-21.43 36.57h-.02l-.21 1.18c-.46 2.6 5.67 5.86 13.7 7.28 8.03 1.41 14.9.45 15.36-2.16l.05-.31c.01-.01.16-.88.16-.88z"
      fill="url(#i)"
    />
    <Path
      d="M77.99 11.7c.15 0 .29.01.43.04 4.67.82 8.9 15.77 5.18 38.23 0 0-.07.42-.11.67-.6.3-2.27.82-5.48.82-2 0-4.25-.21-6.5-.61-6.35-1.12-10.24-3.23-11.17-4.27l.13-.67c1.82-9.74 4.84-18.69 8.49-25.21 3.69-6.64 7.09-9 9.03-9m0-3c-7.68 0-16.59 15.84-20.48 36.65h-.02l-.21 1.18c-.46 2.6 5.67 5.86 13.7 7.28 2.51.44 4.9.65 7.02.65 4.67 0 8.03-1.02 8.34-2.81l.05-.31.15-.87c3.61-21.75.27-40.29-7.61-41.68-.31-.06-.63-.09-.94-.09z"
      fill="#424242"
      opacity={0.2}
    />
  </Svg>
);

export default SvgComponent;
