'use client';

import { motion } from 'framer-motion';
import { skills, skillImages } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

export function SkillsChart() {
  const size = 340;
  const center = size / 2;

  // Floating animation config
  const floatVariants = {
    initial: { y: 0 },
    animate: { y: [0, -18, 0], transition: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } },
    whileHover: { scale: 1.15, zIndex: 2 },
  };

  // Arrange images in a circle
  const planets = skills.map((skill, i) => {
    const angle = (i / skills.length) * Math.PI * 2;
    const radius = 90 + (i % 3) * 22;
    const x = Math.round(center + Math.cos(angle) * radius);
    const y = Math.round(center + Math.sin(angle) * radius);
    const imgSize = 54;
    return { ...skill, x, y, imgSize };
  });

  return (
    <Card className="bg-card sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Tech Stack</CardTitle>
        <CardDescription>My core technologies, visually animated.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="relative rounded-full overflow-visible bg-transparent" style={{ width: size, height: size }}>
            {/* Floating skill images in a circle */}
            {planets.map((p, idx) => (
              <motion.div
                key={p.name}
                className="absolute flex items-center justify-center"
                style={{
                  left: p.x - p.imgSize / 2,
                  top: p.y - p.imgSize / 2,
                  width: p.imgSize,
                  height: p.imgSize,
                  zIndex: 1,
                }}
                variants={floatVariants}
                initial="initial"
                animate="animate"
                whileHover="whileHover"
                transition={{ delay: 0.1 * idx }}
              >
                <Image
                  src={skillImages[p.name] || ''}
                  alt={p.name}
                  width={p.imgSize}
                  height={p.imgSize}
                  className="rounded-full shadow-lg bg-white/10 border border-primary/30"
                  style={{ objectFit: 'contain' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Badges below */}
        <div className="flex flex-wrap gap-3 justify-center mt-8">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="badge-blue rounded-full px-5 py-3 text-sm font-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
            >
              {s.name}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
