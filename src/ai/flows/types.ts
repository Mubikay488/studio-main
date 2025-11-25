import {z} from 'genkit';

export const TechRecommendationsInputSchema = z.object({
  projects: z
    .string()
    .describe('Description of the developer projects to generate recommendations.'),
  skills: z.string().describe('List of skills the developer has.'),
});
export type TechRecommendationsInput = z.infer<typeof TechRecommendationsInputSchema>;

export const TechRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized technology recommendations for the developer.'),
});
export type TechRecommendationsOutput = z.infer<typeof TechRecommendationsOutputSchema>;
