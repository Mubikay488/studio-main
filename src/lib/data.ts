import type { Project, Skill, Experience, Education, NavLink, SocialLink, AboutData, Specialization } from './types';
import { Github, Linkedin, Twitter, Code2, Smartphone, Play, Zap } from 'lucide-react';
import placeholderImagesData from './placeholder-images.json';

const placeholderImages = placeholderImagesData.placeholderImages;

export const navLinks: NavLink[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Project' },
  { href: '#contact', label: 'Contact' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
];

export const heroData = {
  name: "Mubarak Iddris",
  title: "Software Developer",
  statement: "I build elegant and efficient web applications. Passionate about clean code and user-centric design.",
};

export const aboutData: AboutData = {
  name: "Mubarak Iddris",
  title: "IT Student at University of Ghana",
  bio: "Hello! I'm Mubarak, an IT student at the University of Ghana with a passion for creating beautiful and functional web applications. I have honed my skills in both front-end and back-end development. I thrive in collaborative environments and am always eager to learn new technologies and take on challenging projects. When I'm not coding, I enjoy watching football, playing video games, and exploring new AI tools to fit in the tech industry.",
};

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with React, Node.js, and a PostgreSQL database.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    imageUrl: placeholderImages.find(p => p.id === 'project1')?.imageUrl ?? '',
    imageHint: placeholderImages.find(p => p.id === 'project1')?.imageHint ?? 'online store',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application that helps users organize their work. Features drag-and-drop functionality and real-time updates using WebSockets.',
    tags: ['Vue.js', 'Firebase', 'WebSockets'],
    imageUrl: placeholderImages.find(p => p.id === 'project2')?.imageUrl ?? '',
    imageHint: placeholderImages.find(p => p.id === 'project2')?.imageHint ?? 'task board',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website (the one you are looking at!) to showcase my projects and skills. Designed and built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    imageUrl: placeholderImages.find(p => p.id === 'project3')?.imageUrl ?? '',
    imageHint: placeholderImages.find(p => p.id === 'project3')?.imageHint ?? 'web design',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Weather App',
    description: 'A simple and clean weather application that provides current weather data and a 5-day forecast for any city. Fetches data from a third-party weather API.',
    tags: ['JavaScript', 'HTML', 'CSS', 'API'],
    imageUrl: placeholderImages.find(p => p.id === 'project4')?.imageUrl ?? '',
    imageHint: placeholderImages.find(p => p.id === 'project4')?.imageHint ?? 'weather forecast',
    githubUrl: '#',
  }
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 80 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 80 },
  { name: 'Next.js', level: 80 },
  { name: 'Node.js', level: 85 },
  { name: 'Express', level: 85 },
  { name: 'Python', level: 65 },
  { name: 'Django', level: 65 },
  { name: 'SQL', level: 70 },
  { name: 'NoSQL', level: 70 },
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 90 },
  { name: 'Tailwind CSS', level: 90 },
];

export const skillImages: Record<string, string> = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'NoSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
};

export const experiences: Experience[] = [
  {
    role: 'IT Intern',
    company: 'Tech Solutions Inc.',
    period: '2023 - Present',
    description: 'Assisted in the development of a new microservices-based architecture, improving system scalability and performance. Gained experience with agile development methodologies.',
  },
];

export const education: Education[] = [
  {
    degree: 'Bachelor of Science in Information Technology',
    institution: 'University of Ghana',
    period: '2024 - Present',
  },
];

export const specializations: Specialization[] = [
  { title: 'Web Developer', icon: Code2 },
  { title: 'React Native Developer', icon: Smartphone },
  { title: 'YouTube Content Creator', icon: Play },
  { title: 'Front End Engineer', icon: Zap },
];
