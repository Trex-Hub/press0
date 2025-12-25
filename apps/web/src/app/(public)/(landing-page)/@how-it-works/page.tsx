import { AnimatedComponents } from '@/src/components/molecules/animated-nodes';

const HowItWorksPage = () => {
  return (
    <AnimatedComponents direction='bottom' duration={1} staggerDelay={0.1}>
      <div className='flex flex-col items-center justify-center gap-4 py-16 md:py-32'>
        {/* <h1 className='text-center text-foreground font-antonio text-4xl font-extrabold uppercase tracking-tight md:text-8xl'>
          How It Works
        </h1> */}
      </div>
    </AnimatedComponents>
  );
};

export default HowItWorksPage;
