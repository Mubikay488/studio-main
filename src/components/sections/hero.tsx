import { heroData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Container */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="animate-fade-in-down transition-all duration-1000 ease-out">
              <p className="text-sm md:text-base font-medium text-accent/80 tracking-wide uppercase mb-4">
                {heroData.title}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-white tracking-tight leading-tight mb-2">
                Hello I'm
              </h1>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-accent tracking-tight animate-fade-in-down delay-100">
                {heroData.name}
              </h2>
            </div>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in-up delay-300 transition-all duration-700 ease-out">
              {heroData.statement}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up delay-500 transition-all duration-700 ease-out">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 transition-all duration-300 transform hover:scale-105">
                <Link href="#projects">My Projects ↓</Link>
              </Button>
              <div className="flex gap-3">
                <Button asChild size="icon" variant="outline" className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://github.com/Mubikay488" aria-label="GitHub">
                    {/* GitHub SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.174 22 16.426 22 12.012 22 6.484 17.523 2 12 2z"/></svg>
                  </Link>
                </Button>
                <Button asChild size="icon" variant="outline" className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                  <Link href="https://www.linkedin.com/in/mubarak-iddris-a38298255/" aria-label="LinkedIn">
                    {/* LinkedIn SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595z"/></svg>
                  </Link>
                </Button>
                <Button asChild size="icon" variant="outline" className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                  <Link href="http://www.youtube.com/@mubarakiddris8164" aria-label="YouTube">
                    {/* YouTube SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 00-2.112-2.112C19.633 3.5 12 3.5 12 3.5s-7.633 0-9.386.574a2.994 2.994 0 00-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 002.112 2.112C4.367 20.5 12 20.5 12 20.5s7.633 0 9.386-.574a2.994 2.994 0 002.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </Link>
                </Button>
                <Button asChild size="icon" variant="outline" className="rounded-full w-12 h-12 transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                  <Link href="#" aria-label="X">
                    {/* X (Twitter) SVG */}
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 7.477l-4.792 6.545 5.47 7.478h-2.13l-4.292-5.86-4.292 5.86h-2.13l5.47-7.478-4.792-6.545h2.13l3.722 5.085 3.722-5.085z"/></svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Image Container with Circular Border */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="animate-fade-in-down transition-all duration-1000 ease-out relative">
              {/* Animated circular border */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-accent/30"></div>
              
              {/* Image */}
              <div className="relative z-10 rounded-full overflow-hidden w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 shadow-2xl">
                <Image
                  src="/profile.jpg/Mubby2.jpg"
                  alt={heroData.name}
                  width={320}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary animate-bounce"/>
        </Link>
      </div>
    </section>
  );
}
