import Image from 'next/image';

const NoteTakerHighlightCard = ({
  iconSrc,
  altText,
  title,
  description,
  iconBg = 'bg-primary',
  cardBg = 'bg-eerieBlack',
  textColor = 'text-[#BBBBBB]',
  ...props
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start ${cardBg} px-6 sm:px-8 py-6 sm:py-8 border-eerieBlack rounded-[20px]`}
      {...props}
    >
      {/* Icon Section */}
      <div
        className={`mb-4 sm:mb-0 ${iconBg} flex-shrink-0 rounded-2xl p-4 flex justify-center items-center mr-7`}
      >
        <Image src={iconSrc} alt={altText} width={32} height={32} />
      </div>

      {/* Content Section */}
      <div>
        <h5 className="font-semibold text-lg sm:text-xl lg:text-2xl mt-2">
          {title}
        </h5>
        <p
          className={`${textColor} text-sm sm:text-base lg:text-lg font-normal mt-4`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default NoteTakerHighlightCard;
