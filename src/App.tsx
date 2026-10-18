import React, { useState, useMemo } from 'react';
import { PROJECTS } from './data/projects';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import { Compass, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      // Category filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesDescription = p.description.toLowerCase().includes(q);
        const matchesBadge = p.badges.some((b) => b.toLowerCase().includes(q));
        return matchesTitle || matchesTagline || matchesDescription || matchesBadge;
      }

      return true;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#181825] text-[#cdd6f4] flex flex-col font-sans selection:bg-[#cba6f7] selection:text-[#11111b]">
      {/* Sticky Header */}
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        projects={PROJECTS}
      />

      {/* Main Content Arena */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 flex flex-col gap-6">
        {/* Hero Banner / Headline */}
        <div className="flex flex-col gap-2 pt-2 md:pt-4">
          <div className="flex items-center gap-2 text-[#cba6f7]">
            <Sparkles className="w-5 h-5" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
              Playground & Radars
            </span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#cdd6f4] tracking-tight">
            Curated web toys, enthusiast guides, and local tools.
          </h1>
          <p className="text-sm md:text-base text-[#a6adc8] max-w-2xl leading-relaxed">
            A personal collection of client-side web applications, hardware spec radars, and digital stories. Zero tracking, zero ads.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            projects={PROJECTS}
          />
          <span className="font-mono text-xs text-[#6c7086] self-end sm:self-auto flex-shrink-0">
            Showing {filteredProjects.length} of {PROJECTS.length} apps
          </span>
        </div>

        {/* Neal.fun Bento Toy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="animate-pop-in">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-center gap-3 bg-[#1e1e2e]/50 border border-dashed border-[#313244] rounded-2xl p-8">
            <Compass className="w-10 h-10 text-[#6c7086]" />
            <h3 className="font-display font-bold text-lg text-[#cdd6f4]">
              No projects found
            </h3>
            <p className="text-xs text-[#a6adc8] max-w-md">
              No tools or radars matched "{searchQuery}". Try searching for categories like "radars", "PWA", "React", or "audio".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="tactile-btn text-xs font-semibold px-4 py-2 bg-[#cba6f7] text-[#11111b] rounded-xl mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
