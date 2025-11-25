'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateRecommendationsAction } from '@/app/actions';
import { Bot, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { recommendationSchema } from '@/lib/schemas';

type FormData = z.infer<typeof recommendationSchema>;

export function AiRecommender() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(recommendationSchema),
    defaultValues: {
      projects: '',
      skills: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    const result = await generateRecommendationsAction(data);

    if (result.success && result.data) {
      setRecommendation(result.data.recommendations);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <section id="recommendations" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <SectionHeading
        title="AI Career Advisor"
        subtitle="Get personalized technology recommendations based on your profile."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="font-headline">Get Your Recommendations</CardTitle>
            <CardDescription>Fill in your projects and skills to get AI-powered advice.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="projects"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Projects</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Built a full-stack e-commerce app with React and Node.js, deployed a machine learning model..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Skills</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., TypeScript, Python, SQL, AWS" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    'Get Recommendations'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 md:mt-0 min-h-[300px]">
          {isLoading && (
             <div className="flex items-center justify-center h-full rounded-lg border border-dashed p-8">
                <Loader2 className="h-16 w-16 text-primary animate-spin"/>
             </div>
          )}
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {recommendation && (
            <Alert className="border-accent">
              <Bot className="h-4 w-4 text-accent" />
              <AlertTitle className="text-accent font-headline">Your Personalized Recommendations</AlertTitle>
              <AlertDescription className="prose prose-sm max-w-none dark:prose-invert text-muted-foreground">
                 <div dangerouslySetInnerHTML={{ __html: recommendation.replace(/\n/g, '<br />') }} />
              </AlertDescription>
            </Alert>
          )}
           {!isLoading && !error && !recommendation && (
            <div className="flex flex-col items-center justify-center text-center h-full rounded-lg border border-dashed p-8">
              <Bot className="h-16 w-16 text-muted-foreground/50"/>
              <p className="mt-4 text-muted-foreground">Your recommendations will appear here.</p>
            </div>
           )}
        </div>
      </div>
    </section>
  );
}
