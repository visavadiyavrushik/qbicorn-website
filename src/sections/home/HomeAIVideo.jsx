import InsightCapsule from '@/components/insightCapsule/insightCapsule';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';
import React from 'react';

const HomeAIVideo = () => {
  return (
    <>
      <section className="mt-[80px] md:mt-[130px]" id="how-it-works">
        <div className="container mx-auto flex justify-center flex-col items-center text-center relative">
          <InsightCapsule iconSrc="/assets/svg/flag.svg" text="Learn To Use" />
          <SectionTitle
            title="Learn more about AI Note Taker in this video"
            description="Unlock productivity with Tactiq's AI Note Taker! Summarize and chat with your meeting transcript effortlessly using AI"
            maxWidth={'1100'}
            subTitleWidth={'992'}
          />
        </div>
        <div className="container mx-auto mt-24">
          <Image
            src="/assets/images/Link.png"
            alt="meeting Video"
            width={1200}
            height={864}
            className="object-contain w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default HomeAIVideo;
