import InsightCapsule from '@/components/insightCapsule/insightCapsule';
import PricingCard from '@/components/PricingCard/PricingCard';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import React from 'react';

const plans = [
  {
    title: 'Starter',
    price: '$0',
    buttonText: 'Get Started Free',
    features: {
      description:
        'Flexible usage with no commitment. Pay only for extra minutes beyond the 120 free monthly minutes.',
      items: [
        '100 Free Monthly Minutes',
        'Real-Time Transcription and Summaries',
        'Basic Collaboration Tools',
        'AI Chat Support during Sessions',
      ],
    },
    tagText: 'No monthly subscription fee',
    tagBgColor: '#1E90FF',
    tagTextColor: '#FFFFFF',
    iconSrc: '/assets/svg/starterbox.svg', // Icon for Starter plan
    buttonColor: '#131313',
    bgColor: '#000', // Background color for Starter plan
  },
  {
    title: 'Pro',
    price: '$6.33 ',
    buttonText: 'Upgrade Now',
    features: {
      description:
        'Full access to Qbicron’s advanced features with 3000 minutes monthly, perfect for professionals and teams.',
      items: [
        '2000 Monthly Minutes',
        'Advanced Summaries and Custom Notes',
        'Team Collaboration with up to 5 users',
        'Detailed Meeting Analytics',
      ],
    },
    tagText: 'For Startups',
    tagBgColor: '#1E90FF',
    tagTextColor: '#FFFFFF',
    iconSrc: '/assets/svg/probox.svg',
    svgBgSrc: '/assets/svg/blue-blush.svg',
    buttonColor: '#00BFFF',
    discountText: 'Use “FIRST100” code for 20% Discount',
  },
];

const HomePricing = () => {
  return (
    <>
      <section className="mt-[80px] md:mt-[130px] relative px-5 lg:px-0" id="pricing">
        <div className="rotated-shadow-left"></div>
        <div className="container mx-auto flex justify-center flex-col items-center text-center relative">
          <InsightCapsule
            iconSrc="/assets/svg/crown.svg"
            text="Our Pricing"
            borderColor="#fff"
          />
          <SectionTitle
            title="Our Pricing Plans"
            description="Discover SAP, your ultimate solution for seamless project management. With cutting-
edge tools and intuitive features."
            maxWidth={1024}
          />
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 px-4 md:px-0">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              buttonText={plan.buttonText}
              features={plan.features}
              tagText={plan.tagText}
              tagBgColor={plan.tagBgColor}
              tagTextColor={plan.tagTextColor}
              bgColor={plan.bgColor}
              buttonColor={plan.buttonColor}
              discountText={plan.discountText}
              iconSrc={plan.iconSrc}
              svgBgSrc={plan.svgBgSrc}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePricing;
