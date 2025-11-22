import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PlayerHUD } from './components/PlayerHUD';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-neon-blue selection:text-dark-900 overflow-x-hidden pb-24">
      <Toaster 
        position="bottom-left"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #333',
          },
        }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Portfolio />
        <About />
      </main>

      <Footer />
      
      {/* Permanent Game HUD */}
      <PlayerHUD />
    </div>
  );
};

export default App;