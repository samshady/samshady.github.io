import React from 'react';
import { Globe } from 'lucide-react';
import { GithubIcon } from './GithubIcon';


export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#313244] bg-[#181825] mt-16 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#a6adc8]">
        {/* Left Note */}
        <div className="flex items-center gap-2">
          <span>Curated by</span>
          <a
            href="https://github.com/samshady"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#cba6f7] hover:underline"
          >
            Sam Shady
          </a>
          <span>•</span>
          <span>Open source on GitHub Pages</span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/samshady"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#cdd6f4] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://dianareyn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#cdd6f4] transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>Diana Reyn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
