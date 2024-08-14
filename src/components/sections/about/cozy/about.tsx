import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import RevealText from '@/components/reveal-text';

function About() {
  return (
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="tech"
    >
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-left lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Tech / Coding
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here&apos;s where I share my journey through tech, and how I got
            started with everything.
          </p>
        </div>
        <div className="space-y-4 text-justify">
          <p className="mt-6 max-w-[700px] text-justify text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>
              Lately I am more drowned into Web Development since that’s my main
              field of work and exploration these days. I am mostly doing React,
              Next.js, Solid.js, Tailwind etc lately.
            </RevealText>
          </p>

          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>
              Computers, smartphones, cars, and all kinds of technological
              advancements have always fascinated me. I got my first computer
              back in 2011, and like every kid, I enjoyed playing games like GTA
              Vice City, NFS MW 2005 (GOAT), and House of the Dead. I dreamed of
              making my own games, but as a kid, I lacked internet access and
              know-how, and school kept me busy ( typical asian ).
            </RevealText>
          </p>

          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>
              Computers, smartphones, cars, and all kinds of technological
              advancements have always fascinated me. I got my first computer
              back in 2011, and like every kid, I enjoyed playing games like GTA
              Vice City, NFS MW 2005 (GOAT), and House of the Dead. I dreamed of
              making my own games, but as a kid, I lacked internet access and
              know-how, and school kept me busy ( typical asian ).
            </RevealText>
          </p>

          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>
              This was true until COVID-19 hit. Just before the lockdown, I got
              a new desktop. With a PC, WiFi, and plenty of free time during
              lockdown, I finally had the chance to explore.
            </RevealText>
          </p>

          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>
              I got busy again when school reopened later in 2021, with all the
              academic work. After my senior high school ended in July 2023, I
              decided to learn web development. Fast forward 1 year, I am
              currently working as a remote fulltime frontend/fullstack
              engineer.
            </RevealText>
          </p>

          {/* <Button asChild>
            <Link href="resume.pdf" target="_blank">
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button> */}
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
