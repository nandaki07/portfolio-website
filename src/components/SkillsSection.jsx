import { useState } from 'react';
import { cn } from '@/lib/utils';

const skills = [
  // Frontend
  { name: 'HTML/CSS', level: 75, category: 'frontend' },
  { name: 'JavaScript', level: 60, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Vite', level: 80, category: 'frontend' },
  { name: 'TailWind/CSS', level: 70, category: 'frontend' },

  // Backend
  { name: 'Java', level: 90, category: 'backend' },
  { name: 'Python', level: 75, category: 'backend' },
  { name: 'C/C++', level: 80, category: 'backend' },
  { name: 'MATLAB', level: 80, category: 'backend' },

  // Cloud & Tools
  { name: 'AWS', level: 70, category: 'tools' },
  { name: 'Git/Github', level: 90, category: 'tools' },
  { name: 'Opera', level: 75, category: 'tools' },
  { name: 'Tableau', level: 75, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'CAD', level: 95, category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory,
  );
  return (
    <section id="skills" className="bg-secondary/30 relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'rounded-full px-5 py-2 transition-colors duration-300',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bd-secondary',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card card-hover rounded-lg p-6 shadow-xs"
            >
              <div className="mb-4 text-left">
                <h3 className="text-lg font-light"> {skill.name}</h3>
              </div>
              <div className="bg-secondary/50 h-2 w-full overflow-hidden rounded-full">
                <div
                  className="bg-primary animate-[grow_1.5s_ease-out h-2 origin-left rounded-full"
                  style={{ width: skill.level + '%' }}
                />
              </div>

              <div className="mt-1 text-right">
                <span className="text-muted-foreground text-sm">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
