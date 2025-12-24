'use client';
// COMPONENTS
import { AnimatedComponents } from '@/src/components/molecules/animated-nodes';
import DummyConversation from '@/src/components/organisms/dummy-conversation';
import Iphone from '@/src/components/molecules/iphone-mockup';

const DummyPhonePage = () => {
  return (
    <div className='w-full flex items-center justify-center  '>
      <div className='relative h-fit w-full md:w-4/5 lg:w-3/5 xl:w-2/5 overflow-hidden'>
        <AnimatedComponents direction='bottom'>
          <Iphone>
            <DummyConversation />
          </Iphone>
        </AnimatedComponents>
      </div>
    </div>
  );
};

export default DummyPhonePage;
