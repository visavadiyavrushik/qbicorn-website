import React from 'react';

const FeatureHighlightCard = ({ title, items, className = '' }) => {
  return (
    <div
      className={`bg-[#ffffff19] p-4 lg:p-4 xl:p-5 2xl:p-6 rounded-[20px] backdrop-blur-[125px] mt-[10px] relative ${className}`}
    >
      <p className="text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-[22px] font-semibold mb-2.5">{title}</p>

      <ul
        className="list-disc text-sm md:text-base 2xl:text-lg font-normal"
        style={{ padding: 'revert' }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureHighlightCard;
