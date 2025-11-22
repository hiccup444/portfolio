import React from 'react';
import { GAMES } from '../constants';
import { GameCard } from './GameCard';

export const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Selected <span className="text-neon-blue">Jam Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Games made in a short timeframe. They might be rough around the edges, 
                but they represent the beginnings to my official game dev journey.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GAMES.map(game => (
                <GameCard key={game.id} game={game} />
            ))}
        </div>
      </div>
    </section>
  );
};