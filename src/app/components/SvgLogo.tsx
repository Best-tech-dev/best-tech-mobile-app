import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

export const SvgLogo = ({ size = 100, color = '#4CAF50' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="45" fill={color} />
      <Path
        d="M30 50 L45 65 L70 35"
        stroke="white"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}; 