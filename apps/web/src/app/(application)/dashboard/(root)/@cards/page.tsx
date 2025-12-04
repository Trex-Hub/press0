// COMPONENTS
import { Card } from '@/src/components/ui/card';

const DashboardCardsPage = () => {
  return (
    <div className='flex flex-row gap-2 flex-wrap w-full'>
      {[...new Array(4)].map((i, idx) => (
        <Card
          key={'first-array-demo-1' + idx}
          className='h-20 md:h-32 xl:h-56 flex-1 min-w-164 animate-pulse flex items-center justify-center'>
          Card {idx + 1}
        </Card>
      ))}
    </div>
  );
};

export default DashboardCardsPage;
