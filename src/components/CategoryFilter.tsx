import React from 'react';
import { CATEGORIES } from '../data/projects';
import type { Project } from '../data/projects';


interface CategoryFilterProps {
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  projects: Project[];
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  projects,
}) => {
  const getCount = (catId: string) => {
    if (catId === 'all') return projects.length;
    return projects.filter((p) => p.category === catId).length;
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = getCount(cat.id);

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={`tactile-btn text-xs font-semibold px-3.5 py-2 rounded-xl border whitespace-nowrap transition-all flex items-center gap-2 ${
              isActive
                ? 'bg-[#cba6f7] text-[#11111b] border-[#cba6f7] shadow-sm font-bold'
                : 'bg-[#1e1e2e] text-[#a6adc8] hover:text-[#cdd6f4] hover:bg-[#313244] border-[#313244]'
            }`}
          >
            <span>{cat.label}</span>
            <span
              className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                isActive ? 'bg-[#11111b]/20 text-[#11111b]' : 'bg-[#313244] text-[#a6adc8]'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
