import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import HeynaLogo from './HeynaLogo';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('roster');

  const navItems = [
    { id: 'roster', label: 'ROSTER', href: '#roster' },
    { id: 'archive', label: 'ARCHIVE', href: '#archive' },
    { id: 'members', label: 'MEMBERS', href: '#members' },
    { id: 'discord', label: 'DISCORD', href: 'https://discord.gg/heyna', external: true }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* YNK Logo - navigation */}
        <div className="flex items-center gap-8">
          <HeynaLogo size="small" />
        </div>

        {/* Navigation links */}
        <div className="flex items-center gap-8 md:gap-12">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onPointerEnter={() => setActiveSection(item.id)}
              className="relative group"
            >
              <span
                className="text-sm font-japanese-ui tracking-[0.15em] transition-colors duration-300"
                style={{
                  color: activeSection === item.id ? '#FF3B30' : '#C8C0B5'
                }}
              >
                {item.label}
              </span>

              {/* Hover effect */}
              <motion.div
                className="absolute -bottom-2 left-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                style={{ opacity: activeSection === item.id ? 0.6 : 0 }}
              />

              {/* External link icon */}
              {item.external && (
                <ArrowUpRight className="absolute -top-2 -right-4 w-3 h-3" style={{ color: '#FF3B30' }} />
              )}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Subtle bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(255, 59, 48, 0.2), transparent)',
          opacity: 0.3
        }}
      />
    </motion.nav>
  );
};

export default Navigation;
