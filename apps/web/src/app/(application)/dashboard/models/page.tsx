'use client';
// COMPONENTS
import { Button } from '@/src/components/ui/button';
import ModelsTable from '@/src/components/tables/models/data';
// HOOKS
import { useGetModels } from '@/src/hooks/models/use-get-models';
// ICONS
import { IconPlus } from '@tabler/icons-react';

const ModelsPage = () => {
  const { data: models, isLoading } = useGetModels();

  return (
    <div className='flex flex-col w-full h-full gap-4'>
      <div className='flex flex-row w-full justify-between items-center'>
        <h4 className='text-xl font-semibold'>Models</h4>
        <Button className='w-fit hover:no-underline' variant={'secondary'}>
          Add Model <IconPlus className='size-4' />
        </Button>
      </div>
      {isLoading ? (
        <div className='flex items-center justify-center h-full py-10'>
          <p className='text-base text-muted-foreground'>Loading models...</p>
        </div>
      ) : (
        <ModelsTable data={models || []} />
      )}
    </div>
  );
};

export default ModelsPage;
