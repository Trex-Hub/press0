type LandingPageLayoutProps = {
  children: React.ReactNode;
  hero: React.ReactNode;
  phone: React.ReactNode;
  'how-it-works': React.ReactNode;
};

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({
  children,
  hero,
  phone,
  'how-it-works': howItWorks,
}) => {
  return (
    <div className='py-16 md:py-32 px-2'>
      <div className='container mx-auto text-center flex flex-col items-center justify-center gap-4'>
        {hero}
        {phone}
        {children}
        {howItWorks}
      </div>
    </div>
  );
};

export default LandingPageLayout;
