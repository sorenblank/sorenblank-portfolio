'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const Carousel = dynamic(
  () => import('@/components/ui/carousel').then((mod) => mod.Carousel),
  { ssr: false }
);

import MotionWrap from '@/components/motion-wrap';
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import TestimonialCard from './testimonial-card';

import Reveal from '@/components/reveal';

import { testimonials } from '@/components/sections/testimonials/config';

import Autoplay from 'embla-carousel-auto-scroll';

function Testimonials() {
  return (
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="testimonials"
    >
      {/* TODO: Redesign for horizontal */}
      <div className="md:px-6">
        <div className="grid gap-10">
          <div className="flex w-full flex-col items-start justify-center text-left max-md:px-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center lg:items-start">
              <Reveal>
                <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  My Testimonials
                </h2>
              </Reveal>
            </div>
            <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
              Here are some of my testimonials where clients and colleagues
              share their experiences of working with me.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-r">
            <Carousel
              opts={{
                align: 'start',
                dragFree: true,
                loop: true
              }}
              plugins={[
                Autoplay({
                  speed: 1,
                  stopOnMouseEnter: false,
                  stopOnFocusIn: false,
                  stopOnInteraction: false
                })
              ]}
              className="w-full before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-none before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-none after:content-[''] md:before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,hsl(var(--background)/0)_100%)] md:after:bg-[linear-gradient(to_right,hsl(var(--background))_0%,hsl(var(--background)/0)_100%)]"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <TestimonialCard
                        name={testimonial.name}
                        image={testimonial.image}
                        username={testimonial.username}
                        url={testimonial.url}
                        testimonial={testimonial.testimonial}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <Carousel
              opts={{
                align: 'start',
                dragFree: false,
                loop: true
              }}
              plugins={[
                Autoplay({
                  speed: 1,
                  stopOnMouseEnter: false,
                  stopOnFocusIn: false,
                  stopOnInteraction: false,
                  direction: 'backward'
                })
              ]}
              className="w-full before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-none before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-none after:content-[''] md:before:bg-[linear-gradient(to_right,hsl(var(--background))_0%,hsl(var(--background)/0)_100%)] md:after:bg-[linear-gradient(to_right,hsl(var(--background))_0%,hsl(var(--background)/0)_100%)]"
            >
              <CarouselContent>
                {testimonials.reverse().map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <TestimonialCard
                        name={testimonial.name}
                        image={testimonial.image}
                        username={testimonial.username}
                        url={testimonial.url}
                        testimonial={testimonial.testimonial}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Testimonials;
