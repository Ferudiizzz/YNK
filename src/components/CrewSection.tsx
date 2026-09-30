import React from 'react';
import { motion } from 'framer-motion';
import type { Member } from '../types/member';
import CrewMember from './CrewMember';
import GraffitiDecoration from './GraffitiDecoration';

interface CrewSectionProps {
  title: string;
  description: string;
  members: Member[];
  onMemberClick: (member: Member) => void;
  isBlacklist?: boolean;
}

const sectionKanji: Record<string, string> = {
  'above-all': '上',
  'the-big-5': '五',
  'money': '金',
  'thugs': '暴',
  'vixens': '女'
};

const sectionColors: Record<string, string> = {
  'above-all': '#FF3B30',
  'the-big-5': '#FF9500',
  'money': '#FFCC00',
  'thugs': '#FF2D55',
  'vixens': '#AF52DE'
};

const CrewSection: React.FC<CrewSectionProps> = ({
  title,
  description,
  members,
  onMemberClick,
  isBlacklist = false
}) => {
  if (members.length === 0) return null;

  const sectionColor = sectionColors[title.toLowerCase().replace(/\s/g, '-')] || '#FF3B30';
  const kanji = sectionKanji[title.toLowerCase().replace(/\s/g, '-')] || '●';

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="py-24 px-6 relative max-w-6xl mx-auto"
    >
      {/* Section header with circle */}
      <div className="relative mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative inline-block mb-8"
        >
          {/* Rough circle - vibrant */}
          <div
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-3 mx-auto flex items-center justify-center"
            style={{
              borderColor: sectionColor,
              opacity: 0.5,
              transform: 'rotate(-8deg)',
              filter: 'blur(1px)'
            }}
          >
            {/* Kanji */}
            <span
              className="text-4xl md:text-5xl font-bold font-japanese"
              style={{
                color: sectionColor,
                fontWeight: '900',
                textShadow: '0 0 20px rgba(255, 59, 48, 0.3)'
              }}
            >
              {kanji}
            </span>
          </div>

          {/* Additional inner circle */}
          <div
            className="absolute inset-0 rounded-full border-2 opacity-30 mx-auto flex items-center justify-center"
            style={{
              borderColor: sectionColor,
              transform: 'rotate(5deg) scale(0.8)',
              filter: 'blur(0.5px)'
            }}
          />
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-5xl font-brush text-white-dirty tracking-tighter mb-4"
          style={{ color: '#D8D0C4', textShadow: '0 0 30px rgba(255, 59, 48, 0.2)' }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-dark text-sm font-japanese-gothic tracking-wider mb-6"
          style={{ letterSpacing: '0.1em' }}
        >
          {description}
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px w-40 mx-auto"
          style={{
            background: `linear-gradient(to right, transparent, ${sectionColor}, transparent)`,
            opacity: 0.4
          }}
        />
      </div>

      {/* Members grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-14">
        {members.map((member, index) => (
          <CrewMember
            key={member.id}
            member={member}
            onClick={() => onMemberClick(member)}
            index={index}
          />
        ))}
      </div>

      {/* Section count */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-8 right-8 text-sm font-japanese-gothic"
        style={{ color: sectionColor }}
      >
        {members.length}
      </motion.div>

      {/* Enhanced graffiti decorations */}
      <GraffitiDecoration type="circle" color="paint-red" size="lg" className="absolute -bottom-16 -left-16 opacity-8" />
      <GraffitiDecoration type="circle" color="paint-orange" size="md" className="absolute top-20 right-20 opacity-6" />
      <GraffitiDecoration type="star" color="paint-yellow" size="sm" className="absolute bottom-1/3 left-1/4 opacity-10" />
    </motion.section>
  );
};

export default CrewSection;
