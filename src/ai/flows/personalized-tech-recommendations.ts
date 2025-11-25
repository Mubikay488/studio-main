'use server';

/**
 * @fileOverview Provides personalized technology recommendations based on a developer's projects and skills.
 *
 * - getPersonalizedRecommendations - A function that generates technology recommendations.
 */

import {ai} from '@/ai/genkit';
import { TechRecommendationsInputSchema, TechRecommendationsOutputSchema, type TechRecommendationsInput, type TechRecommendationsOutput } from '@/ai/flows/types';

export async function getPersonalizedRecommendations(
  input: TechRecommendationsInput
): Promise<TechRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'techRecommendationsPrompt',
  input: {schema: TechRecommendationsInputSchema},
  output: {schema: TechRecommendationsOutputSchema},
  prompt: `You are an AI assistant specialized in providing technology recommendations for software developers.

  Based on the following projects and skills, provide personalized recommendations for technologies to learn:

  Projects: {{{projects}}}
  Skills: {{{skills}}}
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: TechRecommendationsInputSchema,
    outputSchema: TechRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
