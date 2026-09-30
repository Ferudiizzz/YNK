import React from 'react';
import { motion } from 'framer-motion';
import GraffitiDecoration from './GraffitiDecoration';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <GraffitiDecoration type="splash" color="blood" size="lg" className="top-10 left-10 opacity-8" />
      <GraffitiDecoration type="blob" color="blood-dark" size="md" className="top-20 right-20 opacity-6" />
      <GraffitiDecoration type="circle" color="blood" size="sm" className="bottom-20 left-1/4 opacity-5" />
      <GraffitiDecoration type="star" color="blood" size="xs" className="top-1/2 right-1/3 opacity-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* YNK text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-2xl font-paint" style={{ color: '#8B0000' }}>
            YNK
          </span>
        </motion.div>

        {/* Archive text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm font-japanese-gothic tracking-[0.3em] mb-6"
          style={{ color: '#C8C0B5' }}
        >
          ROSTER ARCHIVE
        </motion.p>

        {/* Year */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs font-japanese-gothic tracking-wider mb-8"
          style={{ color: '#5C0000' }}
        >
          2026
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px w-48 mx-auto mb-8"
          style={{
            background: 'linear-gradient(to right, transparent, #8B0000, transparent)',
            opacity: 0.3
          }}
        />

        {/* End of wall */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xs font-japanese-gothic tracking-[0.4em]"
          style={{ color: '#444444' }}
        >
          END OF WALL
        </motion.p>

        {/* Japanese decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'upright',
            fontSize: '60px',
            fontFamily: 'serif',
            color: '#5C0000',
            fontWeight: '900',
            height: '80px',
            margin: '0 auto'
          }}
        >
          終
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
