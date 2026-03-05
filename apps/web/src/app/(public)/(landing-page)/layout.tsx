type LandingPageLayoutProps = {
  children: React.ReactNode;
  hero: React.ReactNode;
  phone: React.ReactNode;
  'how-it-works': React.ReactNode;
  features: React.ReactNode;
  faq: React.ReactNode;
  footer: React.ReactNode;
};

const LandingPageLayout: React.FC<LandingPageLayoutProps> = ({
  children,
  hero,
  phone,
  'how-it-works': howItWorks,
  features,
  faq,
  footer,
}) => {
  return (
    <div className='py-16 md:py-32 px-2'>
      <div className='container mx-auto text-center flex flex-col items-center justify-center gap-4'>
        {hero}
        {phone}
        {children}
        <section id='how-it-works' className='w-full text-left'>
          {howItWorks}
        </section>
        {features}
        {faq}
        {footer}
      </div>
    </div>
  );
};

export default LandingPageLayout;
