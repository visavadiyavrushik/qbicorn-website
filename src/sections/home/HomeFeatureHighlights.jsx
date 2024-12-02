import FeatureHighlightCard from '@/components/FeatureHighlightCard/FeatureHighlightCard';
import InsightCapsule from '@/components/insightCapsule/insightCapsule';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Image from 'next/image';

const HomeFeatureHighlights = () => {
  return (
    <>
      {/* Section 1 */}
      <section className="mt-[80px] md:mt-[130px] relative" id="features">
        <div className="blurred-circle"></div>

        <div className="container mx-auto flex flex-col items-center text-center relative px-5 sm:px-6 lg:px-0">
          <InsightCapsule
            iconSrc="/assets/svg/starstick.svg"
            text="Feature’s"
          />
          <SectionTitle
            title="Feature Highlights"
            description="Discover key benefits and stand-out features designed to elevate your experience."
          />
        </div>

        <div className="container mx-auto mt-10  lg:mt-[80px] relative px-5 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative items-center">
            <div className="relative order-1 lg:order-0">
              <div className="blurred-decorator"></div>
              <Image
                src="/assets/images/feature1.png"
                alt="feature Image"
                width={800}
                height={600}
                className="relative z-10"
              />
            </div>

            <div className="relative order-0 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-5 sm:mb-8 lg:mb-10">
                Summaries That Keep You Focused on What Matters
              </h2>
              <FeatureHighlightCard
                title="Automated Summaries"
                items={[
                  'Receive quick, clear summaries that distill the core of each conversation, saving you time.',
                ]}
              />
              <FeatureHighlightCard
                title="Key Highlights"
                items={[
                  'Qbicron emphasizes crucial points, making it simple to review important details.',
                ]}
              />
              <FeatureHighlightCard
                title="Automated Summaries"
                items={[
                  'Receive quick, clear summaries that distill the core of each conversation, saving you time.',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative">
        <div className="container mx-auto mt-10 sm:mt-[60px] lg:mt-[200px] relative px-3 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative items-center">
            {/* Content */}
            <div className="relative order-0 lg:order-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-5 sm:mb-8 lg:mb-10">
                Gain Deeper Insights with Contextual AI Analysis
              </h2>
              <FeatureHighlightCard
                title="Contextual Understanding"
                items={[
                  'Qbicron’s AI captures the full context of conversations, enhancing your understanding of key topics.',
                ]}
              />
              <FeatureHighlightCard
                title="Pattern Recognition"
                items={[
                  'Detect recurring themes and insights, supporting data-driven decision-making.',
                ]}
              />
              <FeatureHighlightCard
                title="Comprehensive Analysis"
                items={[
                  'Our AI provides in-depth analysis that turns raw data into actionable insights for better outcomes.',
                ]}
              />
            </div>

            <div className="relative order-1 lg:order-1">
              <div className="blurred-decorator-right"></div>
              <Image
                src="/assets/images/feature2.png"
                alt="feature Image"
                width={900}
                height={600}
                className="relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFeatureHighlights;
