'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = skills.map(skill => ({
  name: skill.name,
  level: skill.level,
}));

const chartConfig = {
  level: {
    label: 'Proficiency',
    color: 'hsl(var(--primary))',
  },
};

export function SkillsChart() {
  return (
    <Card className="bg-card sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Skills Proficiency</CardTitle>
        <CardDescription>A visual representation of my technical abilities.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full h-[350px]">
          <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" dataKey="level" hide />
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              width={140}
              className="fill-muted-foreground text-sm"
            />
            <ChartTooltip
              cursor={{fill: 'hsl(var(--accent) / 0.2)'}}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar dataKey="level" layout="vertical" radius={5} fill="hsl(var(--primary))" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
