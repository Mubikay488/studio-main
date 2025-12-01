'use client';

import { motion } from 'framer-motion';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
// AiRecommender removed per request
import { Contact } from '@/components/sections/contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <motion.div id="about-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div id="projects-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
          <Projects />
        </motion.div>
        {/* Recommendations section removed */}
        <motion.div id="contact-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
