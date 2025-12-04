const DashboardRootLayout = ({
  children,
  cards,
  table,
}: {
  children: React.ReactNode;
  cards: React.ReactNode;
  table: React.ReactNode;
}) => {
  return (
    <div className='flex flex-col w-full h-full gap-4'>
      {children}
      {cards}
      {table}
    </div>
  );
};

export default DashboardRootLayout;
