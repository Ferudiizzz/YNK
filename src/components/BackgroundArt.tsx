import React from 'react';
import { motion } from 'framer-motion';

const BackgroundArt: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1: Very faint black/gray graffiti - oni and Japanese elements */}
      <div className="absolute inset-0 opacity-8">
        {/* Large oni mask silhouette - top left */}
        <svg
          className="absolute top-10 left-10 w-80 h-80"
          viewBox="0 0 200 200"
          fill="none"
          style={{ transform: 'rotate(-15deg)' }}
        >
          <path
            d="M100 10 C150 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 50 10 100 10 Z"
            stroke="#222"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M60 40 L140 40 L140 160 L60 160 Z"
            stroke="#1a1a1a"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M70 50 L130 50 L120 120 L80 120 Z"
            stroke="#333"
            strokeWidth="1"
            fill="none"
          />
          {/* Oni horns */}
          <path d="M40 60 L60 40 L80 60" stroke="#222" strokeWidth="3" fill="none" />
          <path d="M160 60 L140 40 L120 60" stroke="#222" strokeWidth="3" fill="none" />
          {/* Oni eyes */}
          <circle cx="70" cy="90" r="15" stroke="#333" strokeWidth="2" fill="none" />
          <circle cx="130" cy="90" r="15" stroke="#333" strokeWidth="2" fill="none" />
          <circle cx="70" cy="90" r="5" fill="#222" />
          <circle cx="130" cy="90" r="5" fill="#222" />
          {/* Oni mouth */}
          <path d="M80 140 Q100 130 120 140" stroke="#222" strokeWidth="2" fill="none" />
        </svg>

        {/* Cherry blossom branch - top right */}
        <svg
          className="absolute top-20 right-10 w-[500px] h-[500px]"
          viewBox="0 0 400 400"
          fill="none"
          style={{ transform: 'rotate(10deg)' }}
        >
          <path
            d="M50 200 Q100 150 150 200 T350 200"
            stroke="#2a2a2a"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M60 210 Q110 160 160 210 T340 210"
            stroke="#1a1a1a"
            strokeWidth="2"
            fill="none"
          />
          {/* Cherry blossoms */}
          <circle cx="80" cy="180" r="12" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="120" cy="190" r="10" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="160" cy="185" r="11" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="200" cy="195" r="9" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="240" cy="190" r="10" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="280" cy="185" r="8" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="320" cy="195" r="11" stroke="#333" strokeWidth="1" fill="none" />
          <circle cx="360" cy="190" r="9" stroke="#333" strokeWidth="1" fill="none" />
          {/* Petals */}
          <circle cx="90" cy="170" r="6" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
          <circle cx="140" cy="175" r="5" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
          <circle cx="180" cy="170" r="7" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
          <circle cx="220" cy="180" r="6" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
          <circle cx="260" cy="175" r="5" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
          <circle cx="300" cy="180" r="6" stroke="#2a2a2a" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Torii gate silhouette - middle left */}
        <svg
          className="absolute left-16 top-1/3 w-64 h-64"
          viewBox="0 0 200 200"
          fill="none"
          style={{ transform: 'rotate(-8deg)' }}
        >
          <path d="M20 180 L20 60 L30 60 L30 40 L60 40 L60 60 L140 60 L140 40 L170 40 L170 60 L180 60 L180 180" stroke="#222" strokeWidth="2" fill="none" />
          <path d="M60 60 L60 180" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M140 60 L140 180" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M40 100 L100 100 L160 100" stroke="#222" strokeWidth="3" fill="none" />
          <rect x="85" y="100" width="30" height="80" stroke="#222" strokeWidth="2" fill="none" />
        </svg>

        {/* Vertical Japanese writing - multiple */}
        <div
          className="absolute left-20 top-1/4"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '140px',
            fontFamily: 'serif',
            color: '#1a1a1a',
            fontWeight: '900',
            transform: 'rotate(-5deg)'
          }}
        >
          影
        </div>

        <div
          className="absolute right-32 top-1/3"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '100px',
            fontFamily: 'serif',
            color: '#1a1a1a',
            fontWeight: '900',
            transform: 'rotate(8deg)'
          }}
        >
          闇
        </div>

        {/* Japanese temple silhouette - bottom left */}
        <svg
          className="absolute bottom-20 left-20 w-96 h-96"
          viewBox="0 0 300 300"
          fill="none"
          style={{ transform: 'rotate(-5deg)' }}
        >
          <path d="M50 280 L50 100 L100 50 L200 50 L250 100 L250 280" stroke="#222" strokeWidth="2" fill="none" />
          <path d="M100 50 L100 280" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M200 50 L200 280" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M150 50 L150 280" stroke="#222" strokeWidth="2" fill="none" />
          <path d="M75 100 L150 50 L225 100" stroke="#222" strokeWidth="1" fill="none" />
          <path d="M75 100 L75 280" stroke="#1a1a1a" strokeWidth="1" fill="none" />
          <path d="M225 100 L225 280" stroke="#1a1a1a" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Layer 2: Faded dark red ink marks */}
      <div className="absolute inset-0 opacity-12">
        {/* Rough brush strokes - larger */}
        <svg className="absolute top-1/4 left-1/4 w-[400px] h-[400px]" viewBox="0 0 300 300">
          <path
            d="M20 150 Q50 50 150 150 T280 150"
            stroke="#5C0000"
            strokeWidth="6"
            fill="none"
            style={{ filter: 'blur(3px)' }}
          />
          <path
            d="M30 170 Q60 70 160 170 T270 170"
            stroke="#4a0000"
            strokeWidth="4"
            fill="none"
            style={{ filter: 'blur(4px)' }}
          />
          <path
            d="M40 190 Q70 90 170 190 T260 190"
            stroke="#3a0000"
            strokeWidth="3"
            fill="none"
            style={{ filter: 'blur(5px)' }}
          />
        </svg>

        {/* Ink splatters - larger */}
        <svg className="absolute bottom-1/4 right-1/4 w-80 h-80" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="60" stroke="#5C0000" strokeWidth="3" fill="none" opacity="0.6" />
          <circle cx="80" cy="80" r="30" stroke="#4a0000" strokeWidth="2" fill="none" opacity="0.4" />
          <circle cx="120" cy="120" r="40" stroke="#5C0000" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="60" cy="140" r="25" stroke="#4a0000" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="140" cy="60" r="35" stroke="#5C0000" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>

        {/* Additional ink splatters */}
        <svg className="absolute top-1/2 left-10 w-64 h-64" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="50" stroke="#4a0000" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="70" cy="70" r="25" stroke="#5C0000" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="130" cy="130" r="30" stroke="#4a0000" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>

        <svg className="absolute top-2/3 right-20 w-72 h-72" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="55" stroke="#5C0000" strokeWidth="2" fill="none" opacity="0.5" />
          <circle cx="80" cy="80" r="28" stroke="#4a0000" strokeWidth="1" fill="none" opacity="0.3" />
          <circle cx="120" cy="120" r="32" stroke="#5C0000" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>
      </div>

      {/* Layer 3: Blood red graffiti strokes */}
      <div className="absolute inset-0 opacity-15">
        {/* Red spray paint marks - larger */}
        <svg className="absolute top-1/3 right-1/3 w-64 h-64" viewBox="0 0 150 150">
          <path
            d="M10 75 Q40 25 75 75 T140 75"
            stroke="#8B0000"
            strokeWidth="3"
            fill="none"
            style={{ filter: 'blur(1.5px)' }}
          />
          <path
            d="M20 85 Q50 35 80 85 T130 85"
            stroke="#720000"
            strokeWidth="2"
            fill="none"
            style={{ filter: 'blur(2px)' }}
          />
          <path
            d="M30 95 Q60 45 85 95 T120 95"
            stroke="#5C0000"
            strokeWidth="1.5"
            fill="none"
            style={{ filter: 'blur(2.5px)' }}
          />
        </svg>

        {/* Red graffiti circles - larger */}
        <svg className="absolute bottom-1/3 left-1/3 w-80 h-80" viewBox="0 0 200 200">
          <circle
            cx="100"
            cy="100"
            r="70"
            stroke="#8B0000"
            strokeWidth="3"
            fill="none"
            style={{
              transform: 'rotate(-8deg)',
              filter: 'blur(1px)'
            }}
          />
          <circle
            cx="100"
            cy="100"
            r="50"
            stroke="#720000"
            strokeWidth="2"
            fill="none"
            style={{ transform: 'rotate(7deg)' }}
          />
          <circle
            cx="100"
            cy="100"
            r="30"
            stroke="#5C0000"
            strokeWidth="1"
            fill="none"
            style={{ transform: 'rotate(-5deg)' }}
          />
        </svg>

        {/* Random red marks - more */}
        <svg className="absolute top-2/3 left-10 w-48 h-48" viewBox="0 0 120 120">
          <path
            d="M15 60 L45 25 L75 60 L45 95 Z"
            stroke="#8B0000"
            strokeWidth="2"
            fill="none"
            style={{ transform: 'rotate(20deg)' }}
          />
          <path
            d="M20 65 L50 30 L80 65 L50 100 Z"
            stroke="#720000"
            strokeWidth="1.5"
            fill="none"
            style={{ transform: 'rotate(-15deg)' }}
          />
        </svg>

        <svg className="absolute top-15 right-1/4 w-56 h-56" viewBox="0 0 140 140">
          <path
            d="M25 70 L55 30 L85 70 L55 110 Z"
            stroke="#720000"
            strokeWidth="2"
            fill="none"
            style={{ transform: 'rotate(-12deg)' }}
          />
          <path
            d="M30 75 L60 35 L90 75 L60 105 Z"
            stroke="#5C0000"
            strokeWidth="1.5"
            fill="none"
            style={{ transform: 'rotate(18deg)' }}
          />
        </svg>

        <svg className="absolute bottom-1/4 right-1/3 w-52 h-52" viewBox="0 0 130 130">
          <path
            d="M20 65 L50 30 L80 65 L50 100 Z"
            stroke="#8B0000"
            strokeWidth="2"
            fill="none"
            style={{ transform: 'rotate(-10deg)' }}
          />
        </svg>

        <svg className="absolute top-1/2 left-1/4 w-60 h-60" viewBox="0 0 150 150">
          <path
            d="M25 75 L55 40 L85 75 L55 110 Z"
            stroke="#720000"
            strokeWidth="2"
            fill="none"
            style={{ transform: 'rotate(15deg)' }}
          />
        </svg>
      </div>

      {/* Layer 4: Brighter red accents around sections */}
      <div className="absolute inset-0 opacity-18">
        {/* Star decorations - more */}
        <svg className="absolute top-20 left-1/2 w-10 h-10" viewBox="0 0 24 24">
          <text x="12" y="18" fontSize="20" fill="#8B0000" style={{ transform: 'rotate(15deg)' }}>
            ★
          </text>
        </svg>

        <svg className="absolute top-1/3 right-20 w-10 h-10" viewBox="0 0 24 24">
          <text x="12" y="18" fontSize="20" fill="#720000" style={{ transform: 'rotate(-10deg)' }}>
            ★
          </text>
        </svg>

        <svg className="absolute top-1/2 left-20 w-10 h-10" viewBox="0 0 24 24">
          <text x="12" y="18" fontSize="20" fill="#8B0000" style={{ transform: 'rotate(20deg)' }}>
            ★
          </text>
        </svg>

        <svg className="absolute top-2/3 right-1/3 w-10 h-10" viewBox="0 0 24 24">
          <text x="12" y="18" fontSize="20" fill="#720000" style={{ transform: 'rotate(-15deg)' }}>
            ★
          </text>
        </svg>

        <svg className="absolute bottom-1/3 left-1/2 w-10 h-10" viewBox="0 0 24 24">
          <text x="12" y="18" fontSize="20" fill="#5C0000" style={{ transform: 'rotate(25deg)' }}>
            ★
          </text>
        </svg>

        <svg className="absolute bottom-1/4 right-1/4 w-10 h-10" viewBox="0 0 24 24">
          <text x="12" y="18" fontSize="20" fill="#8B0000" style={{ transform: 'rotate(-12deg)' }}>
            ★
          </text>
        </svg>

        {/* X marks - more */}
        <svg className="absolute top-1/4 right-20 w-12 h-12" viewBox="0 0 24 24">
          <text x="12" y="20" fontSize="24" fill="#8B0000" fontWeight="bold" style={{ transform: 'rotate(-8deg)' }}>
            ╳
          </text>
        </svg>

        <svg className="absolute top-1/2 left-10 w-12 h-12" viewBox="0 0 24 24">
          <text x="12" y="20" fontSize="24" fill="#720000" fontWeight="bold" style={{ transform: 'rotate(12deg)' }}>
            ╳
          </text>
        </svg>

        <svg className="absolute bottom-1/3 right-1/4 w-12 h-12" viewBox="0 0 24 24">
          <text x="12" y="20" fontSize="24" fill="#5C0000" fontWeight="bold" style={{ transform: 'rotate(-5deg)' }}>
            ╳
          </text>
        </svg>

        <svg className="absolute bottom-1/4 left-32 w-12 h-12" viewBox="0 0 24 24">
          <text x="12" y="20" fontSize="24" fill="#8B0000" fontWeight="bold" style={{ transform: 'rotate(10deg)' }}>
            ╳
          </text>
        </svg>

        {/* Cross marks */}
        <svg className="absolute top-3/4 left-1/4 w-10 h-10" viewBox="0 0 20 20">
          <text x="10" y="16" fontSize="18" fill="#720000" fontWeight="bold" style={{ transform: 'rotate(-7deg)' }}>
            ✕
          </text>
        </svg>

        <svg className="absolute top-1/3 right-1/4 w-10 h-10" viewBox="0 0 20 20">
          <text x="10" y="16" fontSize="18" fill="#5C0000" fontWeight="bold" style={{ transform: 'rotate(13deg)' }}>
            ✕
          </text>
        </svg>
      </div>

      {/* Japanese kanji seals/stamps - more */}
      <div className="absolute inset-0 opacity-12">
        <div
          className="absolute top-1/4 right-1/4 w-28 h-28 rounded-full border-3 flex items-center justify-center"
          style={{
            borderColor: '#8B0000',
            transform: 'rotate(-8deg)',
            fontFamily: 'serif',
            fontSize: '40px',
            fontWeight: '900',
            color: '#8B0000'
          }}
        >
          闇
        </div>

        <div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full border-3 flex items-center justify-center"
          style={{
            borderColor: '#720000',
            transform: 'rotate(10deg)',
            fontFamily: 'serif',
            fontSize: '36px',
            fontWeight: '900',
            color: '#720000'
          }}
        >
          夜
        </div>

        <div
          className="absolute top-1/2 left-10 w-20 h-20 rounded-full border-3 flex items-center justify-center"
          style={{
            borderColor: '#8B0000',
            transform: 'rotate(-5deg)',
            fontFamily: 'serif',
            fontSize: '32px',
            fontWeight: '900',
            color: '#8B0000'
          }}
        >
          影
        </div>

        <div
          className="absolute top-2/3 right-1/4 w-24 h-24 rounded-full border-3 flex items-center justify-center"
          style={{
            borderColor: '#5C0000',
            transform: 'rotate(12deg)',
            fontFamily: 'serif',
            fontSize: '36px',
            fontWeight: '900',
            color: '#5C0000'
          }}
        >
          血
        </div>

        <div
          className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full border-3 flex items-center justify-center"
          style={{
            borderColor: '#720000',
            transform: 'rotate(-8deg)',
            fontFamily: 'serif',
            fontSize: '32px',
            fontWeight: '900',
            color: '#720000'
          }}
        >
          魂
        </div>

        <div
          className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: '#5C0000',
            transform: 'rotate(6deg)',
            fontFamily: 'serif',
            fontSize: '24px',
            fontWeight: '900',
            color: '#5C0000'
          }}
        >
          剣
        </div>
      </div>

      {/* Rough brush circles behind roster sections - larger */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-[30%] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px]" viewBox="0 0 300 300">
          <ellipse
            cx="150"
            cy="150"
            rx="140"
            ry="140"
            stroke="#8B0000"
            strokeWidth="3"
            fill="none"
            style={{
              transform: 'rotate(-8deg)',
              filter: 'blur(1.5px)'
            }}
          />
          <ellipse
            cx="150"
            cy="150"
            rx="110"
            ry="110"
            stroke="#720000"
            strokeWidth="2"
            fill="none"
            style={{ transform: 'rotate(7deg)' }}
          />
          <ellipse
            cx="150"
            cy="150"
            rx="80"
            ry="80"
            stroke="#5C0000"
            strokeWidth="1"
            fill="none"
            style={{ transform: 'rotate(-5deg)' }}
          />
        </svg>

        <svg className="absolute top-[55%] right-1/4 w-[450px] h-[450px]" viewBox="0 0 300 300">
          <ellipse
            cx="150"
            cy="150"
            rx="130"
            ry="130"
            stroke="#8B0000"
            strokeWidth="2.5"
            fill="none"
            style={{
              transform: 'rotate(10deg)',
              filter: 'blur(1.5px)'
            }}
          />
          <ellipse
            cx="150"
            cy="150"
            rx="100"
            ry="100"
            stroke="#720000"
            strokeWidth="1.5"
            fill="none"
            style={{ transform: 'rotate(-7deg)' }}
          />
        </svg>

        <svg className="absolute top-[75%] left-1/4 w-[420px] h-[420px]" viewBox="0 0 300 300">
          <ellipse
            cx="150"
            cy="150"
            rx="120"
            ry="120"
            stroke="#720000"
            strokeWidth="2"
            fill="none"
            style={{
              transform: 'rotate(-10deg)',
              filter: 'blur(1.5px)'
            }}
          />
          <ellipse
            cx="150"
            cy="150"
            rx="90"
            ry="90"
            stroke="#5C0000"
            strokeWidth="1.5"
            fill="none"
            style={{ transform: 'rotate(8deg)' }}
          />
        </svg>

        <svg className="absolute top-[90%] right-1/3 w-[400px] h-[400px]" viewBox="0 0 300 300">
          <ellipse
            cx="150"
            cy="150"
            rx="110"
            ry="110"
            stroke="#5C0000"
            strokeWidth="2"
            fill="none"
            style={{
              transform: 'rotate(12deg)',
              filter: 'blur(1.5px)'
            }}
          />
        </svg>
      </div>

      {/* Additional Japanese decorative elements */}
      <div className="absolute inset-0 opacity-8">
        {/* Vertical writing */}
        <div
          className="absolute top-1/4 left-32"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '80px',
            fontFamily: 'serif',
            color: '#5C0000',
            fontWeight: '900',
            transform: 'rotate(-5deg)'
          }}
        >
          血
        </div>

        <div
          className="absolute top-1/2 right-24"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '70px',
            fontFamily: 'serif',
            color: '#720000',
            fontWeight: '900',
            transform: 'rotate(7deg)'
          }}
        >
          絆
        </div>

        <div
          className="absolute bottom-1/3 left-24"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '60px',
            fontFamily: 'serif',
            color: '#5C0000',
            fontWeight: '900',
            transform: 'rotate(-3deg)'
          }}
        >
          伝
        </div>
      </div>

      {/* Subtle parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-6"
        initial={{ y: 0 }}
        whileInView={{ y: -80 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 3, ease: "linear" }}
      >
        {/* Moving particles */}
        <svg className="absolute top-0 left-0 w-full h-full">
          <circle cx="15%" cy="15%" r="3" fill="#8B0000" />
          <circle cx="85%" cy="25%" r="2" fill="#720000" />
          <circle cx="35%" cy="55%" r="3" fill="#5C0000" />
          <circle cx="75%" cy="85%" r="2" fill="#8B0000" />
          <circle cx="25%" cy="75%" r="2.5" fill="#720000" />
          <circle cx="65%" cy="45%" r="3" fill="#5C0000" />
          <circle cx="95%" cy="55%" r="2" fill="#8B0000" />
          <circle cx="45%" cy="95%" r="2.5" fill="#720000" />
          <circle cx="5%" cy="65%" r="2" fill="#5C0000" />
          <circle cx="55%" cy="35%" r="3" fill="#8B0000" />
        </svg>
      </motion.div>

      {/* Faint red glow in corners */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 0, 0, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(114, 0, 0, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(92, 0, 0, 0.1) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px]"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 0, 0, 0.12) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundArt;
