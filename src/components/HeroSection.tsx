import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-6 text-primary text-glow"
      >
        Level Up Your Gaming Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl mb-8 max-w-2xl mx-auto"
      >
        Immerse yourself in our state-of-the-art gaming paradise. From high-end PCs to the latest consoles, we&apos;ve got your gaming needs covered.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button size="lg" className="text-lg px-8 py-6">
          Book Your Session
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;