'use client';
// HOOKS
import { ReactNode } from 'react';
// CORE
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
