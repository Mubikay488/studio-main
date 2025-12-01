import { aboutData, specializations, skills, education } from '@/lib/data';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { SkillsChart } from '@/components/skills-chart';

export function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Who I Am Section */}
      <div className="mb-24">
        <SectionHeading title="Who I Am ?" subtitle="A brief introduction" />
        <div className="max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {aboutData.bio}
          </p>
        </div>
      </div>

      {/* Skills Proficiency, Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Skills Chart - Left side */}
        <div className="lg:col-span-2">
          <SkillsChart />
        </div>

        {/* Education - Right side */}
        <div>
          <Card className="bg-card sticky top-24 h-fit">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative pl-8 before:absolute before:left-1 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full after:absolute after:left-[7px] after:top-2 after:h-full after:w-px after:bg-border last:after:hidden"
                >
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
