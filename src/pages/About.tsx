import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-primary text-glow"
      >
        About GameZone
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6 text-lg"
      >
        <p>
          Welcome to GameZone, your ultimate destination for all things gaming! We are passionate about creating an immersive and exciting environment for gamers of all levels.
        </p>
        <p>
          At GameZone, we offer state-of-the-art gaming equipment, including high-performance PCs, the latest consoles, and cutting-edge VR technology. Our facility is designed to provide the best possible gaming experience, whether you&apos;re a casual player or a competitive esports enthusiast.
        </p>
        <p>
          Our mission is to foster a vibrant gaming community where players can connect, compete, and celebrate their shared love for gaming. We regularly host tournaments, social events, and gaming workshops to bring our community together.
        </p>
        <p>
          Founded by a group of lifelong gamers, GameZone is more than just a business - it&apos;s a labor of love. We understand what gamers want because we are gamers ourselves, and we&apos;re committed to continuously improving and expanding our offerings to meet the evolving needs of our community.
        </p>
        <p>
          Whether you&apos;re looking to try out the latest games, improve your skills, or just have a fun time with friends, GameZone is the place to be. Come level up with us!
        </p>
      </motion.div>
    </div>
  );
};

export default About;