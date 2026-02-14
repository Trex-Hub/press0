'use client';

import { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperSeparator,
  StepperTitle,
  StepperNav,
} from '@/src/components/reui/stepper';
import { STEPS } from '@/src/utils/how-it-works';
import ParallaxCard from '@/src/components/molecules/parallax-cards';

const HowItWorksPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    const step = Math.min(Math.floor(latest * STEPS.length) + 1, STEPS.length);
    setActiveStep(step);
  });

  return (
    <section className='w-full text-left'>
      <div
        ref={containerRef}
        className='relative'
        style={{ height: `${STEPS.length * 100}vh` }}>
        <div className='sticky top-0 flex h-screen flex-col items-center justify-center px-2 py-8'>
          <h1 className='text-center text-foreground font-antonio text-4xl font-extrabold uppercase tracking-tight md:text-8xl'>
            How It Works
          </h1>

          <div className='flex w-full max-w-5xl flex-1 overflow-hidden rounded-3xl backdrop-blur-md'>
            <div className='hidden shrink-0 items-center justify-center px-8 md:flex lg:px-12'>
              <Stepper value={activeStep} orientation='vertical'>
                <StepperNav>
                  {STEPS.map((step, idx) => (
                    <StepperItem key={idx} step={idx + 1}>
                      <StepperTrigger
                        asChild
                        className='flex w-full items-center gap-3'>
                        <StepperIndicator className='size-9 text-sm font-semibold'>
                          {idx + 1}
                        </StepperIndicator>
                        <StepperTitle className='whitespace-nowrap text-sm font-medium'>
                          {step.title}
                        </StepperTitle>
                      </StepperTrigger>
                      {idx < STEPS.length - 1 && (
                        <StepperSeparator className='h-16 transition-colors duration-700 data-[state=completed]:bg-primary/60' />
                      )}
                    </StepperItem>
                  ))}
                </StepperNav>
              </Stepper>
            </div>

            <div className='flex-1 overflow-hidden px-3 pb-3 pt-10 md:px-5 md:pb-5 md:pt-30'>
              <div className='relative h-full'>
                {STEPS.map((step, idx) => (
                  <ParallaxCard
                    key={idx}
                    index={idx}
                    step={step}
                    scrollYProgress={scrollYProgress}
                    totalSteps={STEPS.length}
                    isActive={activeStep === idx + 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPage;
