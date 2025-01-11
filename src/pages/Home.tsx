import React from 'react';
import HeroSection from '../components/HeroSection';
import GameCard from '../components/GameCard';

const Home: React.FC = () => {
  const featuredGames = [
    { title: 'PC Gaming Station', description: 'High-end gaming rigs with the latest hardware', image: '/images/pc-station.jpg', price: '$10/hour' },
    { title: 'PlayStation 5 Zone', description: 'Next-gen console gaming experience', image: '/images/ps5-zone.jpg', price: '$8/hour' },
    { title: 'VR Experience', description: 'Immersive virtual reality gaming', image: '/images/vr-gaming.jpg', price: '$15/hour' },
  ];

  return (
    <div>
      <HeroSection />
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">Featured Gaming Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;