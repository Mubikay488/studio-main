import type { LucideIcon } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  level: number; // e.g. 80 for 80%
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  icon: LucideIcon;
  label: string;
};

export type AboutData = {
  name: string;
  title: string;
  bio: string;
};

export type Specialization = {
  title: string;
  description?: string;
  icon: LucideIcon;
};
