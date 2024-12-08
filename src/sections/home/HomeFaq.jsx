import Accordion from '@/components/Accordion/Accordion';
import InsightCapsule from '@/components/insightCapsule/insightCapsule';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';

const accordionItems = [
  {
    title: 'What makes Our AI note taker unique?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.',
  },
  {
    title: 'Can I use AI Note Taker for a past meeting',
    content:
      'Suspendisse potenti. Vivamus vel ligula dui. Integer quis turpis sapien. Cras in justo ut sem mollis sollicitudin.',
  },
  {
    title: 'How do I start using AI Note Taker for transcription?',
    content:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    title:
      'Does Our AI Note Taker support multiple languages for transcription?',
    content:
      'Suspendisse potenti. Vivamus vel ligula dui. Integer quis turpis sapien. Cras in justo ut sem mollis sollicitudin.',
  },
  {
    title: 'Can AI Note-Taking Apps provide transcript and action items?',
    content:
      'Suspendisse potenti. Vivamus vel ligula dui. Integer quis turpis sapien. Cras in justo ut sem mollis sollicitudin.',
  },
];

const HomeFaq = () => {
  return (
    <>
      <section className="mt-[80px] md:mt-[130px] ">
        <div className="container mx-auto flex justify-center flex-col items-center text-center relative px-5  xl:px-16">
          <InsightCapsule
            iconSrc="/assets/svg/quistioncircle.svg"
            text="FAQ’s"
            borderColor="#fff"
          />
          <SectionTitle
            title="Frequently Asked Questions"
            description="Find answers to commonly asked questions about SAP, covering features, pricing, integrations, and more, to help you make informed decisions for your project management needs."
          />
        </div>

        <div className="container mx-auto mt-10 max-w-[1024px]">
          {accordionItems.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomeFaq;
