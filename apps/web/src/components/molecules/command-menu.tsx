'use client';

// HOOKS
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
// ICONS
import {
  HomeIcon,
  MessageCircleIcon,
  ChartAreaIcon,
  Bot,
  UserIcon,
} from 'lucide-react';
// COMPONENTS
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/src/components/ui/command';
import { toast } from 'sonner';
// STORES
import { CommandMenuStoreProps } from '@/src/stores/command-menu-store';

const CommandMenu = ({ open, setOpen }: CommandMenuStoreProps) => {
  const router = useRouter();

  const handleSelect = useCallback(
    (value: string) => {
      if (value.startsWith('/')) {
        router.push(value);
        setOpen(false);
      }
    },
    [router, setOpen]
  );

  const handleAI = useCallback(() => {
    toast.info('This feature is coming soon...');
  }, []);

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title='Search'
      description='Search for pages and navigate quickly'>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Navigation'>
          <CommandItem value='/dashboard' onSelect={handleSelect}>
            <HomeIcon />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem value='/dashboard/profile' onSelect={handleSelect}>
            <UserIcon />
            <span>Profile</span>
          </CommandItem>
          <CommandItem value='/dashboard/chats' onSelect={handleSelect}>
            <MessageCircleIcon />
            <span>Chats</span>
          </CommandItem>
          <CommandItem value='/dashboard/analytics' onSelect={handleSelect}>
            <ChartAreaIcon />
            <span>Analytics</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='AI Features Coming Soon...'>
          <CommandItem onSelect={handleAI}>
            <Bot />
            <span>Ask AI</span>
          </CommandItem>
          <CommandItem onSelect={handleAI}>
            <Bot />
            <span>Analyze with AI</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Quick Actions'>
          <CommandItem onSelect={handleAI}>
            <Bot />
            <span>Create a Suppport Ticket</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default CommandMenu;
