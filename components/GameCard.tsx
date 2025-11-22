import React from 'react';
import { GameProject, TechStack } from '../types';
import { Play, Github, Trophy, Calendar, User } from 'lucide-react';

interface GameCardProps {
  game: GameProject;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <div className="group relative bg-dark-800 rounded-xl border border-white/10 overflow-hidden hover:border-neon-blue/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]">
        {/* Media Container (Video or Image) */}
        <div className="relative h-48 overflow-hidden">
            {game.videoUrl ? (
                <video 
                    src={game.videoUrl}
                    poster={game.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            ) : (
                <img 
                    src={game.image} 
                    alt={game.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            )}
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent opacity-80"></div>
            
            {/* Jam Badge */}
            <div className="absolute bottom-4 left-4 flex flex-col gap-1 z-10">
                <div className="flex items-center gap-2 text-neon-blue text-xs font-bold tracking-wider uppercase bg-dark-900/80 px-2 py-1 rounded backdrop-blur-sm w-fit">
                    <Trophy size={12} />
                    {game.jamName}
                </div>
                {game.jamRank && (
                    <span className="text-xs text-gray-400 pl-1">{game.jamRank}</span>
                )}
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{game.title}</h3>
                <span className="flex items-center gap-1 text-xs text-gray-500 font-mono">
                    <Calendar size={12} />
                    {game.date}
                </span>
            </div>

            {/* Role Display */}
            <div className="mb-4 flex items-center gap-2 text-xs font-mono text-neon-green/90">
                <User size={12} />
                <span>Role: <span className="text-gray-300">
                    {Array.isArray(game.role) ? game.role.join(', ') : game.role}
                </span></span>
            </div>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                {game.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {game.tags.map(tag => (
                    <span 
                        key={tag} 
                        className={`text-[10px] font-mono px-2 py-1 rounded border ${
                            tag === TechStack.Unity || tag === TechStack.Godot 
                            ? 'border-neon-purple/30 text-neon-purple bg-neon-purple/5' 
                            : 'border-gray-700 text-gray-400'
                        }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-2 rounded font-bold text-sm hover:bg-neon-blue transition-colors">
                    <Play size={16} /> Play Now
                </button>
                <a 
                    href={game.githubUrl}
                    className="flex items-center justify-center px-3 border border-white/20 rounded hover:bg-white/10 text-white transition-colors"
                    aria-label="View Source"
                >
                    <Github size={18} />
                </a>
            </div>
        </div>
    </div>
  );
};