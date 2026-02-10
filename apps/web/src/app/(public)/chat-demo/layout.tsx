import { Suspense } from 'react';

const ChatDemoLayout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

export default ChatDemoLayout;
