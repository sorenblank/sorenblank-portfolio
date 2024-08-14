import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';
import RevealText from '@/components/reveal-text';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  url,
  image,
  duration,
  description,
  className
}: ExperienceCardProps) {
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2">
            {image && (
              <Image
                src={image}
                alt={company}
                width={40}
                height={32}
                className="aspect-square rounded-sm"
              />
            )}

            <h3 className="text-2xl font-semibold">
              {url ? (
                <Link href={url}>
                  <RevealText className="underline-offset-2 hover:underline">
                    {company}
                  </RevealText>
                </Link>
              ) : (
                <RevealText>{company}</RevealText>
              )}
            </h3>
          </div>
          <span className="text-sm font-medium">
            <RevealText>{duration}</RevealText>
          </span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">
          <RevealText>{name}</RevealText>
        </h4>
        <p className="mt-2">
          <RevealText delay={0.01}>{description}</RevealText>
        </p>
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
