import React from 'react';
import { motion } from 'framer-motion';
import type { Member } from '../types/member';
import GraffitiDecoration from './GraffitiDecoration';

interface CrewMemberProps {
  member: Member;
  onClick: () => void;
  index: number;
}

const statusColors = {
  online: '#B7FF00',
  idle: '#eab308',
  dnd: '#ef4444',
  offline: '#6b7280'
};

const CrewMember: React.FC<CrewMemberProps> = ({ member, onClick, index }) => {
  const statusColor = statusColors[member.status];

  // Use Discord avatar if available, otherwise use default Discord avatar
  const avatarUrl = member.avatar || `https://cdn.discordapp.com/embed/avatars/${parseInt(member.id) % 5}.png`;

  // Vibrant paint color based on section
  const paintColor = member.section === 'above-all' ? '#FF3B30' :
                    member.section === 'the-big-5' ? '#FF9500' :
                    member.section === 'money' ? '#FFCC00' :
                    member.section === 'thugs' ? '#FF2D55' : '#AF52DE';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.08, y: -4 }}
      onClick={onClick}
      className="relative flex flex-col items-center cursor-pointer group"
    >
      {/* Avatar circle with vibrant brush ring */}
      <div className="relative mb-4">
        {/* Rough brush ring - vibrant */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            border: '3px solid #FF3B30',
            transform: 'rotate(-5deg)',
            filter: 'blur(0.8px)'
          }}
        />

        {/* Additional inner ring */}
        <div
          className="absolute inset-2 rounded-full border opacity-20 group-hover:opacity-40 transition-opacity duration-300"
          style={{
            borderColor: paintColor,
            transform: 'rotate(3deg)',
            filter: 'blur(0.5px)'
          }}
        />

        {/* Avatar */}
        <motion.img
          src={avatarUrl}
          alt={member.username}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover relative z-10"
          style={{ border: '2px solid rgba(255, 59, 48, 0.3)' }}
          whileHover={{ rotate: 3 }}
          transition={{ duration: 0.2 }}
        />

        {/* Status dot */}
        <div
          className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 z-20"
          style={{
            backgroundColor: statusColor,
            borderColor: '#050505'
          }}
        />
      </div>

      {/* Username */}
      <motion.div
        className="text-center"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <p className="text-white-dirty text-base font-japanese-gothic font-bold tracking-wide mb-1" style={{ textShadow: '0 0 20px rgba(255, 59, 48, 0.2)' }}>
          @{member.username}
        </p>
        <p className="text-sm font-japanese-gothic" style={{ color: paintColor, letterSpacing: '0.05em' }}>
          YNK
        </p>
      </motion.div>

      {/* Hover decoration */}
      <GraffitiDecoration type="star" color="paint-red" size="xs" className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-50 transition-opacity" />
      <GraffitiDecoration type="star" color="paint-orange" size="xs" className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-40 transition-opacity" />
    </motion.div>
  );
};

export default CrewMember;
