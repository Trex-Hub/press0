import { SearchBar } from '@/src/components/molecules/search-bar';
import SidebarLayout from '@/src/components/layout/sidebar-layout';
import { Skeleton } from '@/src/components/ui/skeleton';

const DashboardLoadingLayout = () => {
  return (
    <SidebarLayout>
      <SearchBar />
      <div className='flex flex-col w-full gap-4'>
        <div className='flex flex-row w-full justify-between items-center'>
          <Skeleton className='w-20 h-6' />
        </div>
        <div className='flex flex-row gap-2 flex-wrap w-full'>
          {[...new Array(4)].map((i, idx) => (
            <Skeleton
              key={'first-array-demo-1' + idx}
              className='h-20 md:h-32 xl:h-56 flex-1 min-w-164 animate-pulse flex items-center justify-center'
            />
          ))}
        </div>
        <div className='flex flex-col w-full gap-4'>
          <div className='flex flex-row w-full justify-between items-center'>
            <Skeleton className='w-20 h-6' />
          </div>
          <Skeleton className='min-h-120 flex-1 w-full animate-pulse flex items-center justify-center' />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default DashboardLoadingLayout;
