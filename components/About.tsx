import React from 'react';
import { Code2, Cpu, Coffee, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-800/50 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div>
                <h2 className="text-3xl font-bold mb-6">
                    Behind the <span className="text-neon-purple">Pixels</span>
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    I started my journey 3 years ago with a simple question: "How hard can it be to make a game?" 
                    Turns out, very hard. But I fell in love with the process.
                </p>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    My focus is on gameplay programming and game feel. I believe that even a simple cube moving 
                    across a screen should feel satisfying. I'm currently exploring oppurtunities in Game Jams!
                </p>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-dark-900 rounded-lg border border-white/5">
                        <Code2 className="text-neon-blue mb-2" size={24} />
                        <h4 className="font-bold text-white mb-1">Coding</h4>
                        <p className="text-xs text-gray-500">C#, GDScript, TypeScript</p>
                    </div>
                    <div className="p-4 bg-dark-900 rounded-lg border border-white/5">
                        <Cpu className="text-neon-purple mb-2" size={24} />
                        <h4 className="font-bold text-white mb-1">Engines</h4>
                        <p className="text-xs text-gray-500">Unity, Godot 4</p>
                    </div>
                </div>
            </div>

            {/* Stats / Visual */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-dark-900 border border-white/10 rounded-2xl p-8">
                    <h3 className="font-mono text-lg mb-6 text-gray-200 border-b border-white/10 pb-4">stats.json</h3>
                    <ul className="space-y-4 font-mono text-sm">
                        <li className="flex justify-between items-center">
                            <span className="text-gray-500 flex items-center gap-2"><Coffee size={14}/> Caffeine Consumed</span>
                            <span className="text-white">Infinite</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-500 flex items-center gap-2"><Heart size={14}/> Game Jams</span>
                            <span className="text-neon-blue">3 Completed</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-500">Merge Conflicts</span>
                            <span className="text-neon-purple">Too many</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-gray-500">Current Status</span>
                            <span className="text-green-500">Baking Lights...</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};