import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import ProjectCard from './project-card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

import { projects } from '@/components/sections/projects/config';

import Reveal from '@/components/reveal';

function Projects() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Reveal>
                <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  My
                </h2>
              </Reveal>
              <Reveal>
                <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  Projects
                </h2>
              </Reveal>
            </div>
            <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
              Here are some of my projects where I&apos;ve turned code into
              cool, functional stuff.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <div className="h-full" key={index}>
                      <ProjectCard
                        name={project.name}
                        slug={project.slug}
                        description={project.description}
                        thumbnail={project.thumbnail}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* todo: look for a nicer design, remove px-12 to see the new design */}
              {/* <CarouselPrevious className='z-[999] left-0 rounded' variant={"default"} />
              <CarouselNext className='z-[999] right-0 rounded' variant={"default"} /> */}
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
