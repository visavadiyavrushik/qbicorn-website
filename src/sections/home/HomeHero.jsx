'use client';

import Image from 'next/image';

export default function HomeHero() {
  return (
    <section className="pt-[50px] md:pt-[100px]">
      <div
        className="min-h-[80vh] flex items-center justify-center py-10  bg-cover md:bg-contain"
        style={{
          background: `
          radial-gradient(65% 60.19% at 50% 52%, rgba(0, 0, 0, 0.00) 41.44%, rgba(0, 0, 0, 0.70) 100%), 
          linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.86%, #000 100%), 
          url('/assets/svg/homebg.svg')`,

          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          {/* <div className="flex flex-col justify-center items-center relative"> */}
          {/* Hero Image */}
          {/* <Image
              src="/assets/images/homemain.png"
              alt="Hero Image"
              width={440}
              height={336}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[440px]"
            /> */}
          {/* Background Decoration */}
          {/* <div className="bg-white rounded-lg h-10 md:h-[80px] w-full max-w-[280px] sm:max-w-[500px] absolute z-0 bottom-[15px]"></div> */}
          {/* </div> */}

          {/* Join Members Section */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between md:border border-[#fff] px-4 sm:px-6 py-2 rounded-full max-w-[300px] sm:max-w-[500px] mx-auto text-white">
            {/* Avatars */}
            <div className="flex items-center justify-center sm:mr-4">
              <Image
                src="/assets/images/avtargroup.png"
                alt="Avatars"
                width={60}
                height={30}
                className="object-contain"
              />
            </div>
            {/* Text */}
            <p className="text-sm sm:text-base text-center flex-1 mt-2 md:mt-0">
              Join <strong>3k+ Members</strong> today
            </p>
            {/* Button */}
            <button className="mt-2 sm:mt-0 bg-primary text-white rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base">
              AI Note Taker
            </button>
          </div>

          {/* Hero Text */}
          <div className="text-center mt-8  px-4">
            <p className="text-base sm:text-xl xl:text-2xl font-normal font-instrument">
              Qbicron turns meetings and discussions into organized, actionable
              insights in real time.
            </p>

            <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px]">
              Automatically capture meeting notes, action items, and transcripts
              with AI
            </h1>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="text-center mt-12">
            <button
              onClick={() =>
                window.open(
                  'https://app.qbicorn.me',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="bg-primary text-white rounded-xl px-6 py-2 text-sm sm:text-base"
            >
              Start Now
            </button>
            <button className="border border-white ml-3 text-white rounded-xl px-6 py-2 text-sm sm:text-base">
              Learn More
            </button>
          </div>
          <Image
            src="/assets/images/heroimg.svg"
            alt="Hero Image"
            width={1446}
            height={700}
            className=" z-10 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
