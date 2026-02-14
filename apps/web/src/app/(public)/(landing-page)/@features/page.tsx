import { FEATURES } from '@/src/utils/features';

const FeaturesPage = () => {
  return (
    <section
      id='features'
      aria-labelledby='features-heading'
      className='w-full mx-auto pt-16 md:pt-24 pb-16 md:pb-24 flex flex-col items-center justify-center gap-16 md:gap-24'>
      <h1
        id='features-heading'
        className='text-center text-foreground font-antonio text-4xl font-extrabold uppercase tracking-tight md:text-8xl text-pretty scroll-mt-24'>
        Features
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 text-left w-full'>
        {FEATURES.map(feature => (
          <article key={feature.figure} className='flex flex-col gap-4 min-w-0'>
            <span
              className='text-xs font-medium uppercase tracking-wider text-muted-foreground'
              aria-hidden>
              {feature.figure}
            </span>
            <div className='text-blue-400 aspect-square max-w-100' aria-hidden>
              {feature.illustration}
            </div>
            <h2 className='text-xl md:text-2xl font-semibold text-foreground text-pretty'>
              {feature.title}
            </h2>
            <p className='text-muted-foreground text-sm md:text-base leading-relaxed text-pretty max-w-md'>
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPage;
