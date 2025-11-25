'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from '@/hooks/use-toast';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitContactFormAction } from '@/app/actions';
import { contactSchema } from '@/lib/schemas';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import placeholderImagesData from '@/lib/placeholder-images.json';

type FormData = z.infer<typeof contactSchema>;

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const contactImage = placeholderImagesData.placeholderImages.find(p => p.id === 'contact');

  const form = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    const result = await submitContactFormAction(data);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: result.message || 'There was a problem with your request.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Get In Touch" subtitle="I'm always open to discussing new projects or opportunities." />
        <Card className="max-w-4xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-headline font-semibold mb-6 text-primary">Send me a message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Hi Alex, I'd like to talk about..." className="min-h-[120px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
              <div className="hidden md:block relative">
                  {contactImage && <Image src={contactImage.imageUrl} alt={contactImage.description} fill className="object-cover" data-ai-hint={contactImage.imageHint} />}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
