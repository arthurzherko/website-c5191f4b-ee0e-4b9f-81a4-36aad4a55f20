import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  price: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image, price }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:neon-border">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-bold">{price}</span>
        <Button>Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;