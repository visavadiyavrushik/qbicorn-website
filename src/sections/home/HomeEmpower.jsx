'use client';

import React from 'react';

const HomeEmpower = () => {
  return (
    <section className="mt-[80px] md:mt-[130px] ">
      <div className="container mx-auto px-5  xl:px-16 relative">
        <div className="circle-shadow-left-bottom"></div>
        <div className="circle-shadow-right-middle"></div>
        <div
          className="rounded-[30px] flex flex-col lg:flex-row items-center justify-between relative"
          style={{
            background: 'linear-gradient(180deg, #47d7ffea -200px, #fff 100%)',
          }}
        >
          <div className="py-12 lg:py-16 pl-0 lg:pl-10">
            {/* Left Content */}
            <div className="text-center lg:text-left lg:w-[550px] px-4">
              <h2 className="text-[20px] lg:text-[36px] font-bold w-full text-primary leading-tight">
                Empower Your Conversations with Clarity and Actionable Insights
              </h2>
              <p className="text-[16px] lg:text-[18px] mt-4 text-[#000]">
                Turn Conversations into Clear and Actionable Insights
              </p>
              <button
                className="mt-6 px-6 py-3 bg-[#007BFF] text-white rounded-lg text-[16px] lg:text-[18px] font-medium hover:bg-[#0056CC] transition-all"
                onClick={() =>
                  window.open(
                    'https://app.qbicorn.me',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
              >
                Start Free
              </button>
            </div>
          </div>
          <div className="mt-2 lg:mt-[73px] lg:w-1/2">
            <div className="rounded-[20px] overflow-hidden shadow-lg">
              <img
                src="/assets/images/empower.png"
                alt="Conversation Preview"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeEmpower;
