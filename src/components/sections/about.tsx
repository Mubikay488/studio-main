import { aboutData, experiences, education } from '@/lib/data';
import { SectionHeading } from '@/components/shared/section-heading';
import { SkillsChart } from '@/components/skills-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function About() {
  const avatarSrc = '/Mubby2.jpg';

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <SectionHeading title="About Me" subtitle="A little bit about my journey" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-8">
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={avatarSrc} alt={aboutData.name} />
                <AvatarFallback>{aboutData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="font-headline text-2xl">{aboutData.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{aboutData.title}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{aboutData.bio}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full after:absolute after:left-[7px] after:top-2 after:h-full after:w-px after:bg-border last:after:hidden">
                    <p className="font-semibold">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.company} | {exp.period}</p>
                    <p className="mt-2 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
                {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-accent before:rounded-full">
                        <p className="font-semibold">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.institution} | {edu.period}</p>
                    </div>
                ))}
            </CardContent>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <SkillsChart />
        </div>
      </div>
    </section>
  );
}
