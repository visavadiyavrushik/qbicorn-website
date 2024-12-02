import React from 'react';

const FeatureHighlightCard = ({ title, items, className = '' }) => {
  return (
    <div
      className={`bg-[#ffffff19] p-6 rounded-[20px] backdrop-blur-[125px] mt-[10px] relative ${className}`}
    >
      <p className="text-[18px] sm:text-[22px] font-semibold mb-2.5">{title}</p>

      <ul
        className="list-disc text-[14px] sm:text-[18px] font-normal"
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
