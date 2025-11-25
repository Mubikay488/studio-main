import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/types';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col overflow-hidden h-full group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <div className="flex flex-col flex-grow">
        <CardContent className="flex-grow p-6">
          <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <p className="text-muted-foreground text-sm flex-grow">{project.description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex w-full justify-start gap-2">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github />
                  GitHub
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button variant="default" size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
