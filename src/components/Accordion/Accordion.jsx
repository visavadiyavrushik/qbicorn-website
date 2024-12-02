'use client';
import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      {/* Accordion Button */}
      <button
        onClick={toggleAccordion}
        className={`w-full text-left p-4 bg-[#131313] text-white rounded-[16px] text-[20px] border-2 border-transparent flex items-center justify-between transition-all duration-300 
        ${
          isOpen
            ? 'bg-[#1b1b1b] border-[#A0A0A0] rounded-t-[16px] rounded-b-[0px]'
            : 'bg-[#131313] rounded-[16px]'
        }`}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4  bg-[#1b1b1b] rounded-b-[16px] text-[#A0A0A0]">
          {content}
        </div>
      )}
    </div>
  );
};
export default Accordion;
