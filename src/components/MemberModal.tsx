import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Member } from '../types/member';
import GraffitiDecoration from './GraffitiDecoration';

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
}

const statusColors = {
  online: '#B7FF00',
  idle: '#eab308',
  dnd: '#ef4444',
  offline: '#6b7280'
};

const MemberModal: React.FC<MemberModalProps> = ({ member, onClose }) => {
  if (!member) return null;

  const statusColor = statusColors[member.status];
  const avatarUrl = member.avatar || `https://cdn.discordapp.com/embed/avatars/${parseInt(member.id) % 5}.png`;

  return (
    <AnimatePresence>
      {member && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            style={{
              backgroundColor: 'rgba(5, 5, 5, 0.95)',
              backdropFilter: 'blur(4px)'
            }}
          >
            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full p-10 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(92, 0, 0, 0.15), rgba(5, 5, 5, 0.3))',
                border: '2px solid rgba(139, 0, 0, 0.3)',
                borderRadius: '8px'
              }}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{ backgroundColor: 'rgba(139, 0, 0, 0.2)' }}
              >
                <X size={16} style={{ color: '#8B0000' }} />
              </motion.button>

              {/* Avatar with rough ring */}
              <div className="relative mb-6 inline-block">
                <div
                  className="absolute inset-0 rounded-full opacity-50"
                  style={{
                    border: '3px solid #8B0000',
                    transform: 'rotate(-5deg)',
                    filter: 'blur(0.8px)'
                  }}
                />
                <div
                  className="absolute inset-2 rounded-full border opacity-30"
                  style={{
                    borderColor: '#720000',
                    transform: 'rotate(3deg)',
                    filter: 'blur(0.5px)'
                  }}
                />
                <img
                  src={avatarUrl}
                  alt={member.username}
                  className="w-32 h-32 rounded-full object-cover relative z-10"
                  style={{ border: '2px solid rgba(139, 0, 0, 0.3)' }}
                />
                <div
                  className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full border-2 z-20"
                  style={{
                    backgroundColor: statusColor,
                    borderColor: '#050505'
                  }}
                />
              </div>

              {/* Username */}
              <h3 className="text-3xl font-japanese-gothic font-bold mb-2" style={{ color: '#D8D0C4' }}>
                @{member.username}
              </h3>

              {/* Display name */}
              {member.displayName && member.displayName !== member.username && (
                <p className="text-lg font-japanese-ui mb-4" style={{ color: '#C8C0B5' }}>
                  {member.displayName}
                </p>
              )}

              {/* Role */}
              <div className="mb-6">
                <span
                  className="text-sm font-japanese-gothic tracking-wider px-4 py-2 inline-block"
                  style={{
                    color: '#8B0000',
                    border: '1px solid rgba(139, 0, 0, 0.3)',
                    background: 'rgba(92, 0, 0, 0.15)'
                  }}
                >
                  {member.rank}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: statusColor }}
                />
                <span className="text-sm font-japanese-gothic uppercase tracking-wider" style={{ color: '#777777' }}>
                  {member.status}
                </span>
              </div>

              {/* Bio */}
              {member.bio && (
                <p className="text-gray-subtle text-sm font-japanese-ui mb-6 leading-relaxed" style={{ color: '#C8C0B5' }}>
                  {member.bio}
                </p>
              )}

              {/* Joined date */}
              {member.joinedAt && (
                <p className="text-xs font-japanese-gothic tracking-wider" style={{ color: '#5C0000' }}>
                  JOINED {new Date(member.joinedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </p>
              )}

              {/* Decorative elements */}
              <GraffitiDecoration type="star" color="blood" size="xs" className="absolute top-8 left-8 opacity-20" />
              <GraffitiDecoration type="star" color="blood-dark" size="xs" className="absolute bottom-8 right-8 opacity-15" />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MemberModal;
