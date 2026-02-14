import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat Demo | Press0',
  description:
    'Try the Press0 misinformation checker. Verify YouTube videos, Instagram Reels, and fact-check claims using AI.',
};

const ChatDemoLayout = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div className='flex h-dvh items-center justify-center'>
        <div className='flex flex-col items-center gap-3'>
          <div className='size-8 animate-spin rounded-full border-2 border-muted border-t-emerald-500' />
          <p className='text-sm text-muted-foreground'>Loading…</p>
        </div>
      </div>
    }>
    {children}
  </Suspense>
);

export default ChatDemoLayout;
