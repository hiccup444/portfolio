import React from 'react';
import { Github, Mail, Gamepad } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark-900 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-neon-blue hover:text-black transition-all text-gray-400">
                <Github size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-[#5865F2] hover:text-white transition-all text-gray-400" aria-label="Discord">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13066C12.3546 3.89599 10.7323 3.89599 9.13161 4.13066C8.98228 3.77866 8.76895 3.33067 8.57688 3C7.05155 3.256 5.59028 3.71467 4.21429 4.34399C1.44029 8.43999 0.693626 12.448 1.07762 16.4053C2.93361 17.7707 4.73693 18.5813 6.51958 19.136C6.94624 18.5599 7.33023 17.9413 7.65023 17.2906C6.98889 17.0453 6.36104 16.7359 5.77292 16.3733C5.93292 16.256 6.09291 16.128 6.24225 15.9893C9.6982 17.5786 13.4329 17.5786 16.8456 15.9893C16.9949 16.128 17.1549 16.256 17.3149 16.3733C16.7268 16.736 16.099 17.0453 15.4376 17.2906C15.7576 17.9413 16.1416 18.56 16.5682 19.136C18.3509 18.5813 20.1542 17.7707 22.0102 16.4053C22.4689 11.8613 21.3062 7.90666 18.8943 4.34399ZM8.05557 13.6639C7.01025 13.6639 6.15692 12.7039 6.15692 11.52C6.15692 10.336 6.9889 9.37599 8.05557 9.37599C9.12222 9.37599 9.97555 10.336 9.95422 11.52C9.95422 12.7039 9.12222 13.6639 8.05557 13.6639ZM15.0529 13.6639C14.0076 13.6639 13.1542 12.7039 13.1542 11.52C13.1542 10.336 13.9862 9.37599 15.0529 9.37599C16.1196 9.37599 16.9729 10.336 16.9515 11.52C16.9515 12.7039 16.1196 13.6639 15.0529 13.6639Z" fill="currentColor"/>
                </svg>
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-neon-blue hover:text-black transition-all text-gray-400">
                <Gamepad size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-neon-blue hover:text-black transition-all text-gray-400">
                <Mail size={20} />
            </a>
        </div>
        <p className="text-gray-500 text-sm font-mono">
            © {new Date().getFullYear()} Gary Stambaugh. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};