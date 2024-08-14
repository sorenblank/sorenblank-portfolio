'use client';
import React, { useEffect, useRef } from 'react';
import {
  motion,
  useInView,
  useAnimation,
  HTMLMotionProps,
  ForwardRefComponent
} from 'framer-motion';

import Reveal from '@/components/reveal';
import styles from './style.module.scss';
import { cn } from '@/lib/utils';
import ReactDOMServer from 'react-dom/server';

interface RevealTextProps extends HTMLMotionProps<'span'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'fit-content' | '100%';
}

const RevealText = (props: RevealTextProps) => {
  const text = ReactDOMServer.renderToStaticMarkup(props.children);

  // todo: think of a better way to do this
  return (
    <span className={cn(styles.p, props.className)}>
      {text.split(' ').map((word, index) => {
        return (
          <Reveal
            key={index}
            transition={{ duration: 0.5, delay: (props.delay || 0.25) * index }}
            width={props.width}
            className={props.className}
          >
            {word}
          </Reveal>
        );
      })}
    </span>
  );
};

export default RevealText;
