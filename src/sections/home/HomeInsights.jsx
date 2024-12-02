import SectionTitle from '@/components/SectionTitle/SectionTitle';
import React from 'react';
import TryQbiButton from './components/TryQbiButton';
import HomeInsightCard from '@/components/HomeInsightCard/HomeInsightCard';
import InsightCapsule from '@/components/insightCapsule/insightCapsule';

const HomeInsights = () => {
  return (
    <section className="mt-[80px] md:mt-[130px] ">
      <div className="container mx-auto flex justify-center flex-col items-center text-center relative">
        <div className="bg-ellipse"></div>
        <InsightCapsule
          iconSrc="/assets/svg/fire.svg"
          text="Get started in seconds!"
        />
        <SectionTitle
          title="Unlock the Power of Every Conversation with AI-Powered Insights"
          description="Get actionable insights from every interaction for smarter, data-driven results."
          maxWidth={1024}
        />
        <div className="mt-12">
          <TryQbiButton />
        </div>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 mt-12 md:mt-20 mb-16 md:mb-28">
        {/* Card 1 */}
        <HomeInsightCard
          title="Real-Time Conversation Capture"
          description="See Qbicron's powerful real-time transcription in action. Capture every detail without missing a beat, ensuring nothing is overlooked."
          tags={['Real-Time', 'Transcription', 'Accuracy']}
          imageSrc="/assets/images/aichat.png"
          altText="Real-Time Conversation Capture"
        />

        {/* Card 2 */}
        <HomeInsightCard
          title="Team Collaboration and Sharing"
          description="Effortlessly share notes with team members. Qbicron enables real-time collaboration to keep everyone aligned no matter where they are."
          tags={['Collaboration', 'Sharing', 'Accessibility']}
          imageSrc="/assets/images/feature3.png"
          altText="Team Collaboration and Sharing"
        />
      </div>
    </section>
  );
};

export default HomeInsights;
