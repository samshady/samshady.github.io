import React from 'react';
import {
  Layers,
  Watch,
  Gamepad2,
  Headphones,
  Coffee,
  BookOpen,
  Compass,
  CreditCard,
  Presentation,
  LayoutDashboard,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import type { Project } from '../data/projects';


interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getIcon = (iconName: string) => {
    const props = { className: 'w-10 h-10', style: { color: project.accentColor } };
    switch (iconName) {
      case 'layers':
        return <Layers {...props} />;
      case 'watch':
        return <Watch {...props} />;
      case 'gamepad-2':
        return <Gamepad2 {...props} />;
      case 'headphones':
        return <Headphones {...props} />;
      case 'coffee':
        return <Coffee {...props} />;
      case 'book-open':
        return <BookOpen {...props} />;
      case 'compass':
        return <Compass {...props} />;
      case 'id-card':
        return <CreditCard {...props} />;
      case 'presentation':
        return <Presentation {...props} />;
      case 'layout-dashboard':
        return <LayoutDashboard {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <div
      className="toy-card group flex flex-col justify-between rounded-2xl border border-[#313244] bg-[#1e1e2e] overflow-hidden shadow-md hover:border-[#585b70] relative"
      style={{
        boxShadow: `0 4px 20px rgba(0, 0, 0, 0.25)`,
      }}
    >
      {/* Visual Header / Graphic Anchor (Neal.fun style) */}
      <div
        className="h-44 p-6 flex flex-col justify-between relative overflow-hidden transition-colors"
        style={{
          background: `radial-gradient(circle at top right, ${project.accentColor}20, #181825 80%)`,
          borderBottom: `1px solid #313244`,
        }}
      >
        {/* Subtle decorative background watermarks */}
        <div
          className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-300 pointer-events-none"
          style={{ color: project.accentColor }}
        >
          {getIcon(project.icon)}
        </div>

        {/* Top Badges Row */}
        <div className="flex items-center justify-between z-10">
          <span
            className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-sm"
            style={{
              backgroundColor: `${project.accentColor}15`,
              color: project.accentColor,
              borderColor: `${project.accentColor}40`,
            }}
          >
            {project.category}
          </span>

          {project.isLocalOnly && (
            <span className="text-[10px] font-mono text-[#f9e2af] bg-[#f9e2af]/10 border border-[#f9e2af]/30 px-2 py-0.5 rounded-full">
              Local / Kiosk
            </span>
          )}
        </div>

        {/* Center Graphic Illustration */}
        <div className="flex items-center gap-3.5 z-10">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center p-3 shadow-inner border border-white/10 group-hover:scale-105 transition-transform"
            style={{
              backgroundColor: `${project.accentColor}18`,
            }}
          >
            {getIcon(project.icon)}
          </div>
          <div>
            <h3 className="font-display font-extrabold text-xl md:text-2xl text-[#cdd6f4] group-hover:text-white transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-[#a6adc8] mt-0.5 line-clamp-1">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Body Details */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4 bg-[#1e1e2e]">
        <p className="text-xs md:text-sm text-[#a6adc8] leading-relaxed">
          {project.description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-[11px] font-mono text-[#a6adc8] bg-[#181825] border border-[#313244] px-2 py-0.5 rounded"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-3 border-t border-[#313244]">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn flex-1 py-2.5 px-4 rounded-xl font-display font-bold text-xs md:text-sm text-[#11111b] flex items-center justify-center gap-2 shadow-sm transition-all"
            style={{
              backgroundColor: project.accentColor,
            }}
          >
            <span>Launch App</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              title="View source repository"
              className="tactile-btn p-2.5 rounded-xl bg-[#181825] hover:bg-[#313244] text-[#a6adc8] hover:text-[#cdd6f4] border border-[#313244] flex items-center justify-center"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

          )}
        </div>
      </div>
    </div>
  );
};
