import React from 'react';
import { Code, Cpu, Zap } from 'lucide-react';

export const PlayerHUD: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 border-t border-white/10 bg-dark-900/90 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-8">
                
                {/* HUD Label */}
                <div className="hidden md:block font-mono text-xs text-gray-500 tracking-widest">
                    CURRENT_LOADOUT [v1.0]
                </div>

                {/* Skills/Stats */}
                <div className="flex gap-4 md:gap-12 scale-90 md:scale-100 origin-bottom">
                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="p-2 bg-white/5 rounded border border-white/10 group-hover:border-neon-blue/50 transition-colors">
                            <Code size={18} className="text-neon-blue" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <div className="text-[10px] text-gray-500 font-mono mb-1">MAIN WEAPON</div>
                            <div className="font-bold text-sm text-white">C# / Unity</div>
                            <div className="w-20 h-1 bg-dark-700 mt-1 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-blue w-[85%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="p-2 bg-white/5 rounded border border-white/10 group-hover:border-neon-purple/50 transition-colors">
                            <Cpu size={18} className="text-neon-purple" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <div className="text-[10px] text-gray-500 font-mono mb-1">SECONDARY</div>
                            <div className="font-bold text-sm text-white">Godot 4</div>
                            <div className="w-20 h-1 bg-dark-700 mt-1 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-purple w-[60%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="p-2 bg-white/5 rounded border border-white/10 group-hover:border-neon-green/50 transition-colors">
                            <Zap size={18} className="text-neon-green" />
                        </div>
                        <div className="text-left hidden sm:block">
                            <div className="text-[10px] text-gray-500 font-mono mb-1">SPECIAL</div>
                            <div className="font-bold text-sm text-white">Prototyping</div>
                            <div className="w-20 h-1 bg-dark-700 mt-1 rounded-full overflow-hidden">
                                <div className="h-full bg-neon-green w-[95%]"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
};