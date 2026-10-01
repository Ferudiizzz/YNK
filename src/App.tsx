import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EntryScreen from './components/EntryScreen';
import Navigation from './components/Navigation';
import BackgroundArt from './components/BackgroundArt';
import CrewHeader from './components/CrewHeader';
import CrewSection from './components/CrewSection';
import MemberModal from './components/MemberModal';
import Footer from './components/Footer';
import { members, sections } from './data/members';
import type { Member } from './types/member';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
  };

  const sectionGroups = {
    'above-all': members.filter(m => m.section === 'above-all'),
    'the-core': members.filter(m => m.section === 'the-big-5'),
    'blacklist': members.filter(m => m.section === 'money'),
    'crew': members.filter(m => m.section === 'thugs'),
    'vixens': members.filter(m => m.section === 'vixens')
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#050505' }}>
      <BackgroundArt />

      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryScreen key="entry" onEnter={() => setHasEntered(true)} />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Navigation />
            <CrewHeader />

            {/* Crew Sections */}
            {sections.map(section => (
              <CrewSection
                key={section.id}
                title={section.title}
                description={section.description}
                members={sectionGroups[section.id as keyof typeof sectionGroups]}
                onMemberClick={handleMemberClick}
                isBlacklist={section.id === 'money'}
              />
            ))}

            <Footer />

            {/* Member Modal */}
            <MemberModal
              member={selectedMember}
              onClose={() => setSelectedMember(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
