import React from 'react';

interface GraffitiDecorationProps {
  type: 'circle' | 'star' | 'splash' | 'blob' | 'x';
  color: 'blood' | 'blood-dark' | 'blood-deep';
  size: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
}

const colorMap = {
  blood: '#8B0000',
  'blood-dark': '#5C0000',
  'blood-deep': '#720000'
};

const sizeMap = {
  xs: 'w-4 h-4',
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-32 h-32'
};

const GraffitiDecoration: React.FC<GraffitiDecorationProps> = ({
  type,
  color,
  size,
  className = ''
}) => {
  const fillColor = colorMap[color];
  const sizeClass = sizeMap[size];

  const renderDecoration = () => {
    switch (type) {
      case 'circle':
        return (
          <div
            className={`${sizeClass} rounded-full`}
            style={{
              border: `${size === 'xs' ? '1' : size === 'sm' ? '2' : size === 'md' ? '3' : '4'}px solid ${fillColor}`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              filter: 'blur(0.5px)'
            }}
          />
        );

      case 'star':
        return (
          <svg
            className={sizeClass}
            viewBox="0 0 24 24"
            style={{
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
              filter: 'blur(0.3px)'
            }}
          >
            <text x="12" y="18" fontSize={size === 'xs' ? '14' : size === 'sm' ? '18' : size === 'md' ? '22' : '28'} fill={fillColor}>
              ★
            </text>
          </svg>
        );

      case 'splash':
        return (
          <svg
            className={sizeClass}
            viewBox="0 0 50 50"
            style={{ transform: `rotate(${Math.random() * 25 - 12.5}deg)` }}
          >
            <path
              d="M25 5 Q35 15 45 25 Q35 35 25 45 Q15 35 5 25 Q15 15 25 5"
              stroke={fillColor}
              strokeWidth={size === 'xs' ? '1' : size === 'sm' ? '2' : size === 'md' ? '3' : '4'}
              fill="none"
              style={{ filter: 'blur(1px)' }}
            />
          </svg>
        );

      case 'blob':
        return (
          <svg
            className={sizeClass}
            viewBox="0 0 50 50"
            style={{ transform: `rotate(${Math.random() * 20 - 10}deg)` }}
          >
            <ellipse
              cx="25"
              cy="25"
              rx={size === 'xs' ? '15' : size === 'sm' ? '18' : size === 'md' ? '20' : '22'}
              ry={size === 'xs' ? '12' : size === 'sm' ? '15' : size === 'md' ? '18' : '20'}
              stroke={fillColor}
              strokeWidth={size === 'xs' ? '1' : size === 'sm' ? '2' : size === 'md' ? '3' : '4'}
              fill="none"
              style={{ filter: 'blur(1.5px)' }}
            />
          </svg>
        );

      case 'x':
        return (
          <svg
            className={sizeClass}
            viewBox="0 0 24 24"
            style={{
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              filter: 'blur(0.3px)'
            }}
          >
            <text x="12" y="20" fontSize={size === 'xs' ? '16' : size === 'sm' ? '20' : size === 'md' ? '24' : '30'} fill={fillColor} fontWeight="bold">
              ╳
            </text>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {renderDecoration()}
    </div>
  );
};

export default GraffitiDecoration;
