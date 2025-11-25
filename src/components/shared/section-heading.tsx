import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center space-y-3 mb-12', className)}>
      <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
