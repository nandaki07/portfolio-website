import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'IBE Product Development Project',
    description:
      'Hyglow is a shower head designed for individuals with upper limb differences who face difficulty scrubbing during showering. Developed through the IBE Honors Program’s product development course, Hyglow features built-in cleansing functionality and a thoughtful, user-centered design.',
    image: '/projects/project1.png',
    tags: ['Product Development', 'CAD'],
    demoURL: 'https://nandaki2005.wixsite.com/thehyglow',
    //githubURL: "#"
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Featured <span className="text-primary"> Projects</span>
        </h2>

        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
          Some of my recent projects!
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card card-hover overflow-hidden rounded-lg shadow-sm"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="bg-primary/20 text-secondary-foreground rounded-full border px-2 py-1 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-1 text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a>
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            className="cosmic-button mx-auto flex w-fit items-center gap-2"
            target="_blank"
            href="https://github.com/nandaki07 "
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
