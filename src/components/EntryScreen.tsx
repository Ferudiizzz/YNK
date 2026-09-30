import React from 'react';
import { motion } from 'framer-motion';
import HeynaLogo from './HeynaLogo';
import GraffitiDecoration from './GraffitiDecoration';

interface EntryScreenProps {
  onEnter: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      style={{ backgroundColor: '#050505' }}
    >
      {/* Background decorations */}
      <GraffitiDecoration type="splash" color="blood" size="lg" className="top-20 left-10 opacity-12" />
      <GraffitiDecoration type="blob" color="blood-dark" size="md" className="top-40 right-20 opacity-8" />
      <GraffitiDecoration type="circle" color="blood" size="sm" className="bottom-40 left-1/4 opacity-5" />
      <GraffitiDecoration type="splash" color="blood-deep" size="md" className="top-1/3 right-1/4 opacity-10" />
      <GraffitiDecoration type="blob" color="blood" size="lg" className="bottom-1/3 left-1/3 opacity-8" />

      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* YNK Logo with Japanese text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <HeynaLogo size="large" showJapanese={true} />
        </motion.div>

        {/* ROSTER ARCHIVE label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <span className="text-2xl md:text-3xl font-brush tracking-[0.15em]" style={{ color: '#8B0000' }}>
            ROSTER ARCHIVE
          </span>
        </motion.div>

        {/* Japanese motto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-16 font-japanese"
          style={{
            color: '#B11217',
            fontStyle: 'italic',
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            height: '120px',
            margin: '0 auto',
            textShadow: '0 0 30px rgba(139, 0, 0, 0.3)'
          }}
        >
          闇夜の影
        </motion.p>

        {/* ENTER button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, y: -3 }}
          whileTap={{ scale: 0.98 }}
          onClick={onEnter}
          className="px-12 py-4 text-lg font-japanese-ui tracking-[0.2em] transition-all duration-300"
          style={{
            color: '#D8D0C4',
            border: '2px solid #8B0000',
            background: 'linear-gradient(135deg, rgba(92, 0, 0, 0.3), rgba(5, 5, 5, 0.5))',
            textShadow: '0 0 20px rgba(139, 0, 0, 0.3)'
          }}
        >
          ENTER
        </motion.button>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#8B0000' }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full"
          style={{ backgroundColor: '#720000' }}
        />
      </div>
    </motion.div>
  );
};

export default EntryScreen;
