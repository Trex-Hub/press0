// COMPONENTS
import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
// NEXT
import Link from 'next/link';

const DashboardTablePage = () => {
  return (
    <div className='flex flex-col w-full h-full gap-4'>
      <div className='flex flex-row w-full justify-between items-center'>
        <h4 className='text-xl font-semibold'>Latest Chats</h4>
        <Button className='w-fit hover:no-underline' variant={'link'} asChild>
          <Link href='/dashboard/chats'>View All</Link>
        </Button>
      </div>
      <Card className='min-h-120 flex-1 w-full animate-pulse flex items-center justify-center'>
        Table
      </Card>
    </div>
  );
};

export default DashboardTablePage;
