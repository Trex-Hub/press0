'use client';
// COMPONENTS
import {
  InputGroup,
  InputGroupTextarea,
  InputGroupAddon,
} from '@/src/components/ui/input-group';
import { Button } from '@/src/components/ui/button';
// HOOKS
import { useState } from 'react';
// ICONS
import { Send } from 'lucide-react';
import ModelSelector from '@/src/components/molecules/model-selector';

const DemoPage = () => {
  const [model, setModel] = useState<string>('auto');
  console.log(model);
  return (
    <div className='flex flex-col gap-3.5 md:gap-7 min-h-screen items-center justify-center p-2 w-full max-w-2xl mx-auto'>
      <h1 className='mx-auto max-w-2xl text-center text-2xl font-semibold leading-9 text-foreground text-pretty whitespace-pre-wrap'>
        How can I help you today?
      </h1>
      <div className='w-full'>
        <InputGroup>
          <InputGroupTextarea
            placeholder='Ask, Search or Chat...'
            className='w-full'
            id='search-input'
          />
          <InputGroupAddon align='block-end' className='justify-between'>
            <ModelSelector setModel={setModel} />

            <Button variant='ghost' size='icon-sm' className=''>
              <Send className='size-4' />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
};

export default DemoPage;
