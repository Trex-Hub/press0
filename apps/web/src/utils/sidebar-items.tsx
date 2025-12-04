// ICONS
import {
  IconArrowLeft,
  IconBrandTabler,
  IconMessageCircle,
  IconChartArea,
  IconUser,
} from '@tabler/icons-react';

type SidebarItem = {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const sidebarItems: SidebarItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/dashboard',
    icon: (
      <IconBrandTabler className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    ),
  },
  {
    id: 'chats',
    label: 'Chats',
    href: '/dashboard/chats',
    icon: (
      <IconMessageCircle className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    ),
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/dashboard/analytics',
    icon: (
      <IconChartArea className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    ),
  },
  {
    id: 'profile',
    label: 'Profile',
    href: '/dashboard/profile',
    icon: (
      <IconUser className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    ),
  },
  {
    id: 'logout',
    label: 'Logout',
    href: '/api/sign-out',
    icon: (
      <IconArrowLeft className='h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200' />
    ),
  },
];
