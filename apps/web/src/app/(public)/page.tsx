'use client';
// COMPONENTS
import { AnimatedText } from '@/src/components/molecules/animated-text';
import { Button } from '@/src/components/ui/button';
import { AnimatedComponents } from '@/src/components/molecules/animated-nodes';
import Iphone from '@/src/components/molecules/iphone-mockup';
import DummyConversation from '@/src/components/organisms/dummy-conversation';
// ICONS
import { Asterisk, Rss, ShieldCheck, Globe } from 'lucide-react';
// NEXT
import Link from 'next/link';

const Home = () => {
  return (
    <div className='py-16 md:py-32 px-2'>
      <div className='container flex flex-col items-center justify-center gap-4 text-center mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <div className='text-primary/40 flex items-center justify-center gap-2 text-xs font-medium tracking-tight md:text-lg'>
            <Rss className='size-4' />
            <span>Real Time Knowledge</span>
          </div>
          <div className='text-primary/40 flex items-center justify-center gap-2 text-xs font-medium tracking-tight md:text-lg'>
            <ShieldCheck className='size-4' />
            <span>Secure and Private</span>
          </div>
          <div className='text-primary/40 flex items-center justify-center gap-2 text-xs font-medium tracking-tight md:text-lg'>
            <Globe className='size-4 animate-spin' />
            <span>Works Everywhere</span>
          </div>
        </div>
        <div className='flex flex-row items-center md:items-start justify-center'>
          <h1 className='text-center text-foreground font-antonio text-4xl font-extrabold uppercase tracking-tight md:text-8xl'>
            <AnimatedText text='Fighting misinformation' />
          </h1>
          <Asterisk
            size={40}
            strokeWidth={3}
            className='hidden lg:block text-red-500 size-fit'
          />
        </div>
        <p className='text-muted-foreground/80 max-w-xl'>
          An AI agent that analyzes videos, extracts key claims, and verifies
          them using real-time knowledge, helping people understand what&apos;s
          true and what isn&apos;t.
        </p>
        <div className='bg-muted-foreground/10 flex rounded-3xl p-1.5'>
          <Button className='rounded-3xl' size={'lg'} asChild>
            <Link href='/how-it-works'>See How It Works</Link>
          </Button>
          <Button className='rounded-3xl' variant={'ghost'} size={'lg'} asChild>
            <Link href='/demo'>Try the Demo</Link>
          </Button>
        </div>
        <div className='flex flex-col items-center justify-center w-full h-full'>
          <div className='relative h-fit w-full sm:w-4/5 lg:w-2/5 overflow-hidden'>
            <AnimatedComponents direction='bottom'>
              <Iphone>
                <DummyConversation />
              </Iphone>
            </AnimatedComponents>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
