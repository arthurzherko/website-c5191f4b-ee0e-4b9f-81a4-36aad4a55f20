import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const services = [
    { title: 'PC Gaming', description: 'High-performance gaming PCs with latest hardware and peripherals.', price: '$10/hour' },
    { title: 'Console Gaming', description: 'Play on PS5, Xbox Series X, and Nintendo Switch.', price: '$8/hour' },
    { title: 'VR Experience', description: 'Immersive VR gaming with top-of-the-line headsets.', price: '$15/hour' },
    { title: 'LAN Parties', description: 'Organize your own gaming event with friends.', price: '$100/4 hours (up to 10 people)' },
    { title: 'Esports Training', description: 'Professional coaching for competitive gamers.', price: '$50/session' },
    { title: 'Birthday Packages', description: 'Special gaming packages for birthday celebrations.', price: 'Starting at $200' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center text-primary text-glow">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="transition-all duration-300 hover:neon-border">
            <CardHeader>
              <CardTitle className="text-primary">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold mb-4">{service.price}</p>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;