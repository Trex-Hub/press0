'use client';

import { InputGroup, InputGroupAddon } from '@/src/components/ui/input-group';
import { Kbd, KbdGroup } from '@/src/components/ui/kbd';
import { SearchIcon } from 'lucide-react';
import { useCommandMenuStore } from '@/src/stores/command-menu-store';
import { Button } from '@/src/components/ui/button';

export const SearchBar = () => {
  const { setOpen } = useCommandMenuStore();

  const handleSearch = () => {
    setOpen(true);
  };

  return (
    <InputGroup className='mb-8'>
      <InputGroupAddon>
        <SearchIcon className='size-4' />
      </InputGroupAddon>
      <Button
        className='flex-1 bg-transparent! hover:bg-transparent! hover:text-foreground justify-start text-sm text-muted-foreground'
        variant={'ghost'}
        onClick={handleSearch}>
        <span className='text-sm text-muted-foreground'>Search</span>
      </Button>
      <InputGroupAddon align='inline-end'>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </InputGroupAddon>
    </InputGroup>
  );
};
