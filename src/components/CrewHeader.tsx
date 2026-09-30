import React from 'react';
import { motion } from 'framer-motion';
import HeynaLogo from './HeynaLogo';
import GraffitiDecoration from './GraffitiDecoration';

const CrewHeader: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background decorations - vibrant Paint Gang style */}
      <GraffitiDecoration type="splash" color="paint-red" size="lg" className="top-20 left-10 opacity-12" />
      <GraffitiDecoration type="blob" color="paint-orange" size="md" className="top-40 right-20 opacity-8" />
      <GraffitiDecoration type="circle" color="paint-yellow" size="sm" className="bottom-40 left-1/4 opacity-5" />
      <GraffitiDecoration type="splash" color="paint-pink" size="md" className="top-1/3 right-1/4 opacity-10" />
      <GraffitiDecoration type="blob" color="paint-blue" size="lg" className="bottom-1/3 left-1/3 opacity-8" />

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* YNK Logo with circle and Japanese text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <HeynaLogo size="large" showJapanese={true} />
        </motion.div>

        {/* ROSTER label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-6"
        >
          <div className="inline-block">
            <span className="text-base font-brush tracking-[0.2em]" style={{ color: '#FF3B30' }}>
              ─── ROSTER ──
            </span>
          </div>
        </motion.div>

        {/* EST label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10"
        >
          <span className="text-sm font-japanese-gothic tracking-[0.5em]" style={{ color: '#FF9500' }}>
            EST. 2026
          </span>
        </motion.div>

        {/* Japanese motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-3xl md:text-4xl mb-8 font-japanese"
          style={{
            color: '#FFCC00',
            fontStyle: 'italic',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            height: '160px',
            margin: '0 auto',
            textShadow: '0 0 30px rgba(255, 59, 48, 0.3)'
          }}
        >
          闇夜の影
        </motion.p>

        {/* Bosozoku description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-subtle text-sm max-w-xl mx-auto mb-6 font-japanese-ui"
          style={{ letterSpacing: '0.12em', lineHeight: '1.8' }}
        >
          Shadows in the dark night.
        </motion.p>

        {/* Japanese bosozoku description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="text-xs max-w-2xl mx-auto mb-16 font-japanese-gothic"
          style={{
            letterSpacing: '0.08em',
            lineHeight: '2',
            color: '#C8C0B5'
          }}
        >
          金髪やオレンジ色に髪を染め、下品な服を着て高校を卒業する前から喫煙や飲酒をする若者たち。
          大声で騒ぐこと、無礼なこと、そして日本の社会の厳しいマナーに従うことを拒むことで有名。
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="h-px w-64 mx-auto"
          style={{
            background: 'linear-gradient(to right, transparent, #FF3B30, transparent)',
            opacity: 0.4
          }}
        />

        {/* Additional decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#FF3B30' }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#FF9500' }}
        />
      </div>
    </section>
  );
};

export default CrewHeader;
