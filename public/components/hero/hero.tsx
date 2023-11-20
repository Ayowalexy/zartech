'use client';
import * as React from 'react';
import { Button } from '../../packages/src/ui/button';
import { agina } from '../../packages/src/fonts/font';
import { useInView } from 'framer-motion';
import { UseAppInView } from '../../context/root.context';
import { HeroProvider } from './HeroProvider';
import { useRef, useEffect } from 'react';

export const Hero = () => {
  const { setInView } = UseAppInView();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setInView(isInView);
  }, [isInView]);

  return (
    <HeroProvider>
      <div
        ref={ref}
        className="w-full border-b-black border-b h-[400px] px-4 lg:px-20 bg-primary gap-7 flex flex-col items-start  justify-center"
      >
        <h3
          className={`${agina.className} leading-[1em] font-bold text-white text-[6rem]`}
        >
          Stay Curious
        </h3>
        <p className="font-light text-lg text-white lg:w-[30%]">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
        <Button size="lg" color="secondary" rounded="lg" intent="secondary">
          Start reading
        </Button>
      </div>
    </HeroProvider>
  );
};
