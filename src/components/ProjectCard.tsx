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
  Mic,
  Laptop,
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
      case 'mic':
        return <Mic {...props} />;
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
      <div className="h-48 relative overflow-hidden transition-colors border-b border-[#313244] bg-[#181825]">
        {project.previewImage ? (
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at top right, ${project.accentColor}25, #181825 80%)`,
            }}
          >
            {getIcon(project.icon)}
          </div>
        )}

        {/* Gradient shadow overlay for badge readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e2e] via-black/20 to-black/50 pointer-events-none" />

        {/* Top Badges Row */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
          <span
            className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shadow-md backdrop-blur-md"
            style={{
              backgroundColor: `${project.accentColor}30`,
              color: project.accentColor,
              borderColor: `${project.accentColor}60`,
            }}
          >
            {project.category}
          </span>

          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center p-1.5 shadow-md border border-white/10 backdrop-blur-md"
            style={{
              backgroundColor: `${project.accentColor}35`,
              color: project.accentColor,
            }}
          >
            {getIcon(project.icon)}
          </div>
        </div>

        {/* Bottom Title Bar overlayed over preview base */}
        <div className="absolute bottom-3 left-4 right-4 z-10 flex flex-col">
          <h3 className="font-display font-extrabold text-xl text-white drop-shadow-md leading-tight group-hover:text-[#cba6f7] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-medium text-[#cdd6f4] drop-shadow line-clamp-1 mt-0.5">
            {project.tagline}
          </p>
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
            title="Open public / mobile version"
            className="tactile-btn flex-1 py-2.5 px-4 rounded-xl font-display font-bold text-xs md:text-sm text-[#11111b] flex items-center justify-center gap-2 shadow-sm transition-all"
            style={{
              backgroundColor: project.accentColor,
            }}
          >
            <span>{project.localUrl ? 'Public / Phone' : 'Launch App'}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {project.localUrl && (
            <a
              href={project.localUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Open local laptop version (localhost:8090)"
              className="tactile-btn py-2.5 px-3 rounded-xl bg-[#181825] hover:bg-[#313244] text-[#cdd6f4] border border-[#313244] flex items-center justify-center gap-1.5 font-display font-semibold text-xs md:text-sm shadow-sm transition-all"
            >
              <Laptop className="w-4 h-4 text-[#89b4fa]" />
              <span>Local</span>
            </a>
          )}

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
