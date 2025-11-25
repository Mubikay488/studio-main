import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-headline font-bold">Mubarak Iddris</h3>
            <p className="text-sm text-primary-foreground/80">IT Student</p>
          </div>
          <div className="flex items-center space-x-2">
            {socialLinks.map((link) => (
              <Button key={link.href} variant="ghost" size="icon" asChild className="hover:bg-primary-foreground/10">
                <Link href={link.href} target="_blank" rel="noopener noreferrer">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Mubarak Iddris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
