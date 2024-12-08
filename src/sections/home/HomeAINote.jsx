import NoteTakerHighlightCard from '@/components/NoteTakerHighlightCard/NoteTakerHighlightCard';
import InsightCapsule from '@/components/insightCapsule/insightCapsule';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const features = [
  {
    iconSrc: '/assets/svg/speaker.svg',
    altText: 'Speaker Identification for Clarity',
    title: 'Speaker Identification for Clarity',
    description:
      'Easily differentiate between speakers in every conversation, ensuring clear and organized notes',
  },
  {
    iconSrc: '/assets/svg/Organization.svg',
    altText: 'Effortless Organization and Retrieval',
    title: 'Effortless Organization and Retrieval',
    description:
      'Qbicron keeps your notes organized and accessible, making it easy to retrieve and review at any time',
  },
  {
    iconSrc: '/assets/svg/conversation.svg',
    altText: 'Summarize Conversations Instantly',
    title: 'Summarize Conversations Instantly',
    description:
      'Qbicron generates instant summaries, capturing key points to save you time and keep you focused',
  },
  {
    iconSrc: '/assets/svg/aIActions.svg',
    altText: 'Personalized AI Actions',
    title: 'Personalized AI Actions',
    description:
      'Ask Our AI to perform personalized actions within your meeting transcripts, such as drafting Jira tickets or follow-up emails, tailored to your needs.',
  },
];

const HomeAINote = () => {
  return (
    <section className="mt-[80px] md:mt-[130px]">
      <div className="container mx-auto flex justify-center flex-col items-center text-center relative px-4 xl:px-16 lg:px-8">
        {/* Capsule and Title Section */}
        <div className="bg-ellipse"></div>
        <InsightCapsule iconSrc="/assets/svg/benifits.svg" text="Benefits" />
        <SectionTitle
          title="AI Note Taker"
          description="Unlock your meeting productivity with Our AI Note Taker. Experience real-time transcription, intelligent summaries, and actionable insights tailored to every meeting. Discover how Our can transform your workflow."
        />
      </div>

      {/* Features Grid */}
      <div className="container mx-auto grid grid-cols-1  lg:grid-cols-2 gap-8 mt-12 px-5 xl:px-16">
        {features.map((feature, index) => (
          <NoteTakerHighlightCard
            key={index}
            title={feature.title}
            description={feature.description}
            iconSrc={feature.iconSrc}
            altText={feature.altText}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeAINote;
