'use server';

import type { z } from 'zod';
import { getPersonalizedRecommendations } from '@/ai/flows/personalized-tech-recommendations';
import type { TechRecommendationsInput } from '@/ai/flows/types';
import { contactSchema } from '@/lib/schemas';

export async function generateRecommendationsAction(data: TechRecommendationsInput) {
  try {
    const result = await getPersonalizedRecommendations(data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating recommendations:", error);
    return { success: false, error: 'Failed to generate recommendations.' };
  }
}

// Contact Form
export async function submitContactFormAction(data: z.infer<typeof contactSchema>) {
  // Simulate sending an email or saving to DB
  console.log('Contact form data received:', data);
  // In a real app, you would have try/catch block here
  // and return success: false on failure.
  return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
}
