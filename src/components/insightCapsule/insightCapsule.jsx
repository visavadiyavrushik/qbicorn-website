// import Image from "next/image";

// const InsightCapsule = ({ iconSrc, text, className = "" }) => {
//   return (
//     <div
//       className={`bg-[#131313] max-w-[300px] sm:max-w-[350px] rounded-[130px] border-[#1B2028] mb-7 px-5 py-3 flex items-center justify-center text-[18px] sm:text-[20px] ${className}`}
//     >
//       {iconSrc && (
//         <Image
//           src={iconSrc}
//           alt={text}
//           width={24}
//           height={24}
//           className="mr-3"
//         />
//       )}
//       <p className="text-[18px] sm:text-[20px]">{text}</p>
//     </div>
//   );
// };

// export default InsightCapsule;

import Image from 'next/image';

const InsightCapsule = ({
  iconSrc,
  text,
  className = '',
  bgColor = '#131313',
  borderColor = '#1B2028',
  textColor = '#FFFFFF',
  iconWidth = 24,
  iconHeight = 24,
  textSize = '18px',
}) => {
  return (
    <div
      className={`rounded-[130px] border mb-7 px-5 py-3 flex items-center justify-center ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={text}
          width={iconWidth}
          height={iconHeight}
          className="mr-3"
        />
      )}
      <p
        className="font-medium"
        style={{ color: textColor, fontSize: textSize }}
      >
        {text}
      </p>
    </div>
  );
};

export default InsightCapsule;
