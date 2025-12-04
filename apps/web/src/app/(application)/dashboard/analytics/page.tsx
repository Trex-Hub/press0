// COMPONENTS
import { Button } from '@/src/components/ui/button';
// ICONS
import { RefreshCw } from 'lucide-react';

const AnalysticsPage = () => {
  return (
    <div className='flex flex-row w-full justify-between items-center'>
      <div className='flex flex-row w-full justify-between items-center'>
        <h4 className='text-xl font-semibold'>Analytics</h4>
        <Button className='w-fit hover:no-underline' variant={'secondary'}>
          Refresh <RefreshCw className='size-4' />
        </Button>
      </div>
    </div>
  );
};

export default AnalysticsPage;
