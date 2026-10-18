import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Search, Sparkles } from 'lucide-react';
import type { Project } from '../data/projects';



interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  projects: Project[];
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  projects,
}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Global hotkey '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSurpriseMe = () => {
    const onlineProjects = projects.filter((p) => !p.isLocalOnly);
    if (onlineProjects.length === 0) return;

    const random = onlineProjects[Math.floor(Math.random() * onlineProjects.length)];
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.2 },
    });

    setTimeout(() => {
      window.open(random.url, '_blank');
    }, 450);
  };

  return (
    <header className="border-b border-[#313244] bg-[#181825]/90 backdrop-blur-md sticky top-0 z-40 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Brand Section */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#cba6f7] via-[#fab387] to-[#89b4fa] flex items-center justify-center text-[#11111b] font-display font-black text-2xl shadow-lg flex-shrink-0">
            S
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl md:text-2xl text-[#cdd6f4] tracking-tight">
                sam.fun
              </span>
              <span className="text-[10px] font-mono text-[#a6adc8] bg-[#313244] px-2 py-0.5 rounded-full border border-[#45475a]">
                by Sam Shady
              </span>
            </div>
            <p className="text-xs text-[#a6adc8]">
              Interactive toys, hardware radars, and client-side tools.
            </p>
          </div>
        </div>

        {/* Search & Surprise Controls */}
        <div className="flex items-center gap-2.5 w-full md:w-auto">
          {/* Search bar */}
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 text-[#6c7086] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search tools & radars (press /)..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#1e1e2e] border border-[#313244] focus:border-[#cba6f7] text-xs text-[#cdd6f4] rounded-xl pl-9 pr-8 py-2.5 outline-none transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#6c7086] hover:text-[#cdd6f4]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Surprise Me Button (Neal.fun style) */}
          <button
            type="button"
            onClick={handleSurpriseMe}
            title="Launch a random project"
            className="tactile-btn text-xs font-bold px-3.5 py-2.5 bg-[#cba6f7] hover:bg-[#b4befe] text-[#11111b] rounded-xl flex items-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Surprise Me</span>
          </button>
        </div>
      </div>
    </header>
  );
};
