'use client';
// MOTION
import { motion } from 'motion/react';
// HOOKS
import { useState } from 'react';
import { useSession } from '@/src/lib/auth-client';
// COMPONENTS
import {
  Sidebar as RootSidebar,
  SidebarBody,
  SidebarLink,
} from '@/src/components/ui/sidebar';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/src/components/ui/avatar';
import ThemeSwitch from '@/src/components/molecules/theme-switch';
// LINKS
import { sidebarItems } from '@/src/utils/sidebar-items';
// NEXT
import Link from 'next/link';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { data } = useSession();
  const { user } = data ?? {};
  const { name, image } = user ?? {};

  return (
    <RootSidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className='justify-between gap-10'>
        <div className='flex flex-1 flex-col overflow-x-hidden overflow-y-auto'>
          <Logo />
          <div className='mt-8 flex flex-col gap-2'>
            {sidebarItems.map(({ id, ...item }) => (
              <SidebarLink key={id} link={item} />
            ))}
          </div>
        </div>
        <div>
          <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center justify-start gap-2  group/sidebar py-2'>
              <Avatar className='size-8 border border-neutral-600 dark:border-neutral-400'>
                <AvatarImage src={image ?? ''} />
                <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <p className='text-neutral-700 dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block p-0 m-0'>
                {name}
              </p>
            </div>
            <ThemeSwitch />
          </div>
        </div>
      </SidebarBody>
    </RootSidebar>
  );
};
export const Logo = () => {
  return (
    <Link
      href='#'
      className='relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black'>
      <div className='h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white' />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='font-medium whitespace-pre text-black dark:text-white'>
        Press0
      </motion.span>
    </Link>
  );
};
export default Sidebar;
