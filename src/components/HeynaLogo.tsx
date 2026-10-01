import React from 'react';
import { motion } from 'framer-motion';

interface HeynaLogoProps {
  size?: 'small' | 'medium' | 'large';
  showJapanese?: boolean;
}

const HeynaLogo: React.FC<HeynaLogoProps> = ({ size = 'medium', showJapanese = false }) => {
  const sizeClasses = {
    small: 'text-3xl md:text-4xl',
    medium: 'text-5xl md:text-7xl',
    large: 'text-8xl md:text-[10rem]'
  };

  const circleSize = {
    small: 'w-24 h-24',
    medium: 'w-32 h-32',
    large: 'w-48 h-48'
  };

  const japaneseSize = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col items-center justify-center"
    >
      {/* Dry brush ink circle - blood red */}
      <svg
        className={`${circleSize[size]} absolute`}
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(-12deg) scale(1.15)' }}
      >
        {/* Irregular dry brush circle */}
        <path
          d="M50 5
               Q80 15 90 50
               Q85 85 75 92
               Q70 95 65 92
               Q60 98 55 95
               Q50 99 45 95
               Q40 98 35 92
               Q30 95 25 92
               Q15 85 10 50
               Q20 15 50 5"
          stroke="#8B0000"
          strokeWidth="3"
          fill="none"
          style={{ filter: 'blur(1px)' }}
        />
      </svg>

      {/* Second ink layer */}
      <svg
        className={`${circleSize[size]} absolute`}
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(8deg) scale(1.05)' }}
      >
        <path
          d="M50 8
               Q78 18 88 50
               Q83 82 73 90
               Q68 93 63 90
               Q58 96 53 93
               Q48 97 43 93
               Q38 96 33 90
               Q23 83 18 50
               Q28 18 50 8"
          stroke="#5C0000"
          strokeWidth="2"
          fill="none"
          style={{ filter: 'blur(1.5px)' }}
        />
      </svg>

      {/* HEYNA text with dry brush style - dirty white */}
      <motion.div
        className={`${sizeClasses[size]} font-brush`}
        style={{
          letterSpacing: '0.08em',
          color: '#E8E4DC',
          textShadow: `
            2px 2px 0px rgba(0, 0, 0, 0.8),
            -1px -1px 0px rgba(139, 0, 0, 0.3),
            0 0 40px rgba(139, 0, 0, 0.2)
          `,
          transform: 'rotate(-6deg) skewX(-3deg)',
          whiteSpace: 'nowrap',
          zIndex: 1,
          fontWeight: '900'
        }}
      >
        HEYNA
      </motion.div>

      {/* Japanese text below HEYNA */}
      {showJapanese && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2"
        >
          <p
            className={`${japaneseSize[size]} font-japanese`}
            style={{
              color: '#8B0000',
              letterSpacing: '0.15em',
              textShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
            }}
          >
            暴走族の限界はない
          </p>
        </motion.div>
      )}

      {/* Rough brush texture overlay */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 opacity-30`}
        style={{
          fontFamily: 'Permanent Marker',
          color: '#D8D3C9',
          transform: 'rotate(4deg) translateX(4px)',
          WebkitTextStroke: '3px rgba(139, 0, 0, 0.5)',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(0.5px)'
        }}
      >
        HEYNA
      </motion.div>

      {/* Second rough brush layer */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 opacity-20`}
        style={{
          fontFamily: 'Permanent Marker',
          color: '#C8C2B8',
          transform: 'rotate(-3deg) translateX(-3px)',
          WebkitTextStroke: '2px rgba(92, 0, 0, 0.4)',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(0.8px)'
        }}
      >
        HEYNA
      </motion.div>
    </motion.div>
  );
};

export default HeynaLogo;
