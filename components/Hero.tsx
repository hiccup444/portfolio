import React, { useState, useEffect, useRef } from 'react';
import { Terminal, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;

      // Get position of the section relative to viewport
      const rect = sectionRef.current.getBoundingClientRect();

      // Calculate mouse position relative to the section
      // This accounts for scrolling automatically since rect.top changes on scroll
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      setMousePos({
        x: (relativeX / rect.width) * 100,
        y: (relativeY / rect.height) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-dark-900">
      {/* Interactive Spotlight Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 243, 255, 0.25), transparent 70%)`
        }}
      ></div>
      
      {/* Secondary "Hotspot" for the flashlight to make the center brighter */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.1), transparent 70%)`
        }}
      ></div>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
             backgroundSize: '50px 50px',
             transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
             transformOrigin: 'top center'
           }}>
      </div>

      {/* CRT Scanlines Overlay */}
      <div className="absolute inset-0 z-10 scanlines opacity-30 pointer-events-none"></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)]"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-[-60px]">
        
        {/* Floating Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-neon-green/30 bg-neon-green/5 rounded backdrop-blur-sm animate-float">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
            <span className="font-mono text-xs text-neon-green tracking-widest uppercase">System Online // Ready to Work</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white select-none">
          CODE <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">BUILD</span> PLAY
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-mono">
            <span className="text-neon-blue">&gt;</span> Indie Developer specializing in gameplay programming and rapid prototyping.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-bold rounded-sm overflow-hidden hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-white to-neon-blue opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <span className="relative flex items-center gap-2">
                    <PlayCircle size={20} /> 
                    START GAME
                </span>
            </a>
            <a href="#about" className="px-8 py-4 border border-white/20 rounded-sm hover:bg-white/5 hover:border-neon-purple/50 transition-all flex items-center gap-2 text-gray-300 font-mono text-sm">
                <Terminal size={16} />
                VIEW LOGS
            </a>
        </div>
      </div>
    </section>
  );
};