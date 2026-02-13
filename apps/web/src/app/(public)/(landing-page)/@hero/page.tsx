// COMPONENTS
import { AnimatedText } from '@/src/components/molecules/animated-text';
import { Button } from '@/src/components/ui/button';
// ICONS
import { Asterisk, Globe, Rss, ShieldCheck } from 'lucide-react';
// NEXT
import Link from 'next/link';

const HeroPage = () => {
  return (
    <>
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
        An AI agent that analyzes videos, extracts key claims, and verifies them
        using real-time knowledge, helping people understand what&apos;s true
        and what isn&apos;t.
      </p>
      <div className='bg-muted-foreground/10 flex rounded-3xl p-1.5'>
        <Button className='rounded-3xl' size={'lg'} asChild>
          <Link href='#how-it-works'>See How It Works</Link>
        </Button>
        <Button className='rounded-3xl' variant={'ghost'} size={'lg'} asChild>
          <Link href='/demo'>Try the Demo</Link>
        </Button>
      </div>
    </>
  );
};

export default HeroPage;
