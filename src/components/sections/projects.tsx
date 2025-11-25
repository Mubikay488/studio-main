import { projects } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/shared/section-heading';

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="My Projects"
          subtitle="A selection of my recent work."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
