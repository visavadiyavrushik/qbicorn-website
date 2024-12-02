import Image from 'next/image';

const PricingCard = ({
  title,
  price,
  buttonText,
  features,
  tagText,
  tagBgColor,
  tagTextColor,
  buttonColor = '#00BFFF',
  bgColor = 'rgba(255, 255, 255, 0.10)',
  discountText = '',
  iconSrc,
  svgBgSrc,
}) => {
  return (
    <div
      className="p-10 rounded-[26px] relative border border-[#1B2028] mt-5 md:mt-0"
      style={{
        background: bgColor,
        backdropFilter: 'blur(125px)',
      }}
    >
      {discountText && (
        <div className="absolute w-[270px] text-center md:w-[330px] md:max-w-[330px] bg-primary rounded-full px-4 py-2 top-[-20px] left-[50%] transform -translate-x-1/2">
          <p className="text-[12px] md:text-[16px]">{discountText}</p>
        </div>
      )}

      <div className="flex justify-between items-center">
        <Image src={iconSrc} alt="icon" width={66} height={66} />
        <p className="text-[34px] font-semibold text-[#D9D9D9]">
          {price}
          <span className="text-[18px] font-normal text-[#666] ml-1 mb-1">
            / Per month
          </span>
        </p>
      </div>

      <div className="flex items-center mt-[27px]">
        <p className="mr-1 text-xl md:text-2xl">{title}</p>
        {tagText && (
          <div
            className="px-[10px] py-1 rounded-[10px]"
            style={{ backgroundColor: tagBgColor, color: tagTextColor }}
          >
            ({tagText})
          </div>
        )}
      </div>

      <p className="mt-[31px] mb-[50px] text-[#666] text-[16px] md:text-[21px]">
        {features.description}
      </p>

      <div>
        <button
          className="flex items-center text-center justify-center text-[16px] md:text-[21px] w-full p-[18px] rounded-xl"
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
          <Image
            src="/assets/svg/rightarrow.svg"
            alt={buttonText}
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
      </div>

      <div>
        <h3 className="mt-[30px] mb-[18px] text-[21px] font-medium">
          Features Included:
        </h3>
        <ul>
          {features.items.map((feature, index) => (
            <li
              key={index}
              className="flex items-center font-normal text-[16px] md:text-[21px] py-4 border-b-2 border-[#212122]"
            >
              <Image
                src="/assets/svg/right-bg-blue.svg"
                alt={feature}
                width={20}
                height={20}
                className="mr-2"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {svgBgSrc && (
        <div
          className="absolute hidden md:block  md:bottom-[-50px] md:right-[-50px] "
          style={{
            backgroundImage: `url(${svgBgSrc})`,
            backgroundSize: 'cover',
            width: '600px',
            height: '600px',
            filter: 'blur(180px)',
          }}
        />
      )}
    </div>
  );
};

export default PricingCard;