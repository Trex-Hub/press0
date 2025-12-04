'use client';
// HOOKS
import { useSession } from '@/src/lib/auth-client';
// UTILS
import { redirect } from 'next/navigation';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  if (session) {
    redirect('/dashboard');
  }
  return <div className='flex flex-col'>{children}</div>;
};

export default AuthLayout;
