import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export const recommendationSchema = z.object({
  projects: z.string().min(10, { message: "Please describe your projects in more detail (at least 10 characters)." }),
  skills: z.string().min(3, { message: "Please list at least one skill (at least 3 characters)." }),
});
