'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion'
import BlurredStagger from '@/src/components/molecules/blurred-stagger';
import faqItems from '@/src/utils/faq';


const FAQs = () => {
    return (
        <section
            className='w-full mx-auto pt-16 md:pt-24 pb-16 md:pb-24 flex flex-col items-center justify-center gap-16 md:gap-24'>
            <h1 className='text-center text-foreground font-antonio text-4xl font-extrabold uppercase tracking-tight md:text-8xl text-pretty scroll-mt-24'>
                FAQ
            </h1>
            <div className="w-full">
                <Accordion
                    type="single"
                    collapsible>
                    {faqItems.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b border-gray-200 dark:border-gray-600">
                            <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline w-full">{item.question}</AccordionTrigger>
                            <AccordionContent>
                                <BlurredStagger text={item.answer} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default FAQs;