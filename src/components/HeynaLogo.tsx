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
      {/* Paint Gang style - vibrant paint splatter circle */}
      <div
        className={`${circleSize[size]} absolute`}
        style={{
          background: 'radial-gradient(circle, rgba(255, 59, 48, 0.2) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'scale(1.3)'
        }}
      />

      {/* Rough hand-painted paint drip circle - vibrant */}
      <svg
        className={`${circleSize[size]} absolute`}
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(-12deg) scale(1.15)' }}
      >
        {/* Irregular paint drip shape */}
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
          stroke="#FF3B30"
          strokeWidth="3"
          fill="none"
          style={{ filter: 'blur(1px)' }}
        />
        {/* Paint drips */}
        <path d="M60 90 L62 98" stroke="#FF9500" strokeWidth="2" fill="none" />
        <path d="M40 88 L38 95" stroke="#FFCC00" strokeWidth="1.5" fill="none" />
        <path d="M70 85 L73 91" stroke="#FF2D55" strokeWidth="1" fill="none" />
        <path d="M30 87 L27 92" stroke="#007AFF" strokeWidth="1.5" fill="none" />
      </svg>

      {/* Second paint layer */}
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
          stroke="#FF9500"
          strokeWidth="2"
          fill="none"
          style={{ filter: 'blur(1.5px)' }}
        />
      </svg>

      {/* Inner paint circle */}
      <svg
        className={`${circleSize[size]} absolute`}
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(-5deg) scale(0.9)' }}
      >
        <path
          d="M50 10
               Q75 20 85 50
               Q80 80 70 88
               Q65 91 60 88
               Q55 94 50 91
               Q45 95 40 88
               Q35 91 30 88
               Q20 80 15 50
               Q25 20 50 10"
          stroke="#FFCC00"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>

      {/* YNK text with Paint Gang vibrant style */}
      <motion.div
        className={`${sizeClasses[size]} font-paint`}
        style={{
          letterSpacing: '0.08em',
          color: '#FF3B30',
          textShadow: `
            8px 8px 0px rgba(255, 149, 0, 0.9),
            -6px -6px 0px rgba(255, 59, 48, 0.75),
            0 0 80px rgba(255, 204, 0, 0.6),
            0 0 160px rgba(255, 45, 85, 0.4),
            0 0 240px rgba(0, 122, 255, 0.2)
          `,
          transform: 'rotate(-6deg) skewX(-3deg)',
          WebkitTextStroke: '5px rgba(0, 0, 0, 0.5)',
          WebkitTextFillColor: '#FF3B30',
          whiteSpace: 'nowrap',
          zIndex: 1,
          filter: 'contrast(1.5) brightness(1.4) saturate(1.3)',
          fontWeight: '900'
        }}
      >
        YNK
      </motion.div>

      {/* Japanese text below YNK */}
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
              color: '#FF9500',
              letterSpacing: '0.15em',
              textShadow: '0 0 20px rgba(255, 59, 48, 0.3)'
            }}
          >
            暴走族の限界はない
          </p>
        </motion.div>
      )}

      {/* Paint drip effect from letters */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-60"
        style={{
          width: '8px',
          height: '35px',
          background: 'linear-gradient(to bottom, #FF3B30, #FF9500, transparent)',
          borderRadius: '0 0 8px 8px',
          filter: 'blur(1px)'
        }}
      />

      {/* Additional paint splatters */}
      <motion.div
        className="absolute bottom-0 left-1/3 opacity-40"
        style={{
          width: '5px',
          height: '20px',
          background: 'linear-gradient(to bottom, #FF9500, transparent)',
          borderRadius: '0 0 5px 5px',
          transform: 'rotate(-18deg)',
          filter: 'blur(0.8px)'
        }}
      />

      <motion.div
        className="absolute bottom-0 right-1/3 opacity-35"
        style={{
          width: '4px',
          height: '15px',
          background: 'linear-gradient(to bottom, #FFCC00, transparent)',
          borderRadius: '0 0 4px 4px',
          transform: 'rotate(12deg)',
          filter: 'blur(0.8px)'
        }}
      />

      {/* Paint splatter droplets */}
      <motion.div
        className="absolute top-1/4 left-1/4 opacity-25"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#FF3B30',
          filter: 'blur(1px)'
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/4 opacity-20"
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: '#FF2D55',
          filter: 'blur(1px)'
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 opacity-22"
        style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          backgroundColor: '#007AFF',
          filter: 'blur(1px)'
        }}
      />

      {/* Rough paint texture overlay */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 opacity-30`}
        style={{
          fontFamily: 'Knewave',
          color: '#FF9500',
          transform: 'rotate(4deg) translateX(4px)',
          WebkitTextStroke: '3px rgba(255, 59, 48, 0.7)',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(0.5px)'
        }}
      >
        YNK
      </motion.div>

      {/* Second rough paint layer */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 opacity-20`}
        style={{
          fontFamily: 'Knewave',
          color: '#FFCC00',
          transform: 'rotate(-3deg) translateX(-3px)',
          WebkitTextStroke: '2px rgba(255, 45, 85, 0.5)',
          WebkitTextFillColor: 'transparent',
          whiteSpace: 'nowrap',
          zIndex: 2,
          pointerEvents: 'none',
          filter: 'blur(0.8px)'
        }}
      >
        YNK
      </motion.div>

      {/* Paint streak effect */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 3, opacity: 0.15 }}
      >
        <defs>
          <linearGradient id="paintStreak" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3B30" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M10 40 Q30 35 50 40 T90 40"
          stroke="url(#paintStreak)"
          strokeWidth="3"
          fill="none"
          style={{ filter: 'blur(2px)' }}
        />
      </svg>
    </motion.div>
  );
};

export default HeynaLogo;
