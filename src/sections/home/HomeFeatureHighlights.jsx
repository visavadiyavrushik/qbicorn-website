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

        <div className="container mx-auto mt-10  lg:mt-[80px] relative px-3 sm:px-6  xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative items-center">
            <div className="relative order-1 lg:order-0">
              <div className="blurred-decorator"></div>
              <div className="relative">
                <Image
                  src="/assets/svg/feat1left.svg"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-[50px] absolute  -top-8 left-2 sm:left-16 md:-top-10 md:left-10 xl:left-14"
                />
                <Image
                  src="/assets/images/feature1.png"
                  alt="feature Image"
                  width={900}
                  height={600}
                  className="relative z-10 w-full"
                />

                <Image
                  src="/assets/svg/feat1bottom.svg"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-[50px] absolute  -bottom-8 right-2 sm:right-16 md:-bottom-10 md:right-10 xl:right-14"
                />
              </div>
            </div>

            <div className="relative order-0 lg:order-1">
              <h2 className="text-xl lg:text-2xl  2xl:text-4xl font-semibold text-white mb-5  lg:mb-6 xl:mb-8  2xl:mb-10">
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
        <div className="container mx-auto mt-10 sm:mt-[60px] lg:mt-[100px] relative px-3 sm:px-6  xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative items-center">
            {/* Content */}
            <div className="relative order-0 lg:order-0">
              <h2 className="text-xl lg:text-2xl  2xl:text-4xl font-semibold text-white mb-5 sm:mb-8 lg:mb-10">
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
              <div className="relative">
                <Image
                  src="/assets/svg/smiley.svg"
                  alt="image"
                  width={60}
                  height={60}
                  className="w-[40px] absolute  -top-10 left-2  md:top-[-50px] md:left-[60px] xl:top-[-60px] xl:left-[100px]"
                />
                <Image
                  src="/assets/images/feature2.png"
                  alt="feature Image"
                  width={1500}
                  height={1020}
                  className="relative z-10 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeFeatureHighlights;
