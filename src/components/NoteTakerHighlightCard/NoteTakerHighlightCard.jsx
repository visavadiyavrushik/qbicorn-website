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
      className={`flex flex-col sm:flex-row items-start ${cardBg} p-3 md:p-4 xl:p-6 2xl:p-8 border-eerieBlack rounded-[20px]`}
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
        <h5 className="font-semibold text-base lg:text-lg  xl:text-xl 2xl:text-2xl mt-2">
          {title}
        </h5>
        <p
          className={`${textColor} text-sm sm:text-sm lg:text-base xl:text-base  font-normal mt-2 xl:mt-4`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default NoteTakerHighlightCard;
