import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';

// import { metadata as meta } from '@/app/config';
import { hero } from '@/components/sections/hero/config';
import RevealText from '@/components/reveal-text';

function Hero() {
  return (
    <MotionWrap className="mx-auto mt-14 flex h-[calc(100dvh-62.5px-56px)] w-full max-w-[1400px] items-center">
      <div className="grid items-center justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        <div className="space-y-3 text-left">
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
            {hero.label}
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Hi, I&apos;m <RevealText delay={0.1}>{hero.name}</RevealText>
          </h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>{hero.description}</RevealText>
          </p>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>{hero.descriptionSecond}</RevealText>
          </p>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>
              And I will try to feature some of them on this site ~
            </RevealText>
          </p>
        </div>
        <Image
          alt="Image"
          className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center"
          height="500"
          sizes="100vw"
          src={'/images/hero.gif'}
          width="889"
          priority={true}
          unoptimized={true}
        />
      </div>
    </MotionWrap>
  );
}

export default Hero;
