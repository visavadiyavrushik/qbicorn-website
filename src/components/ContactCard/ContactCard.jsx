import Image from 'next/image';

const ContactCard = ({ iconSrc, title, description, onClick, classname }) => {
  return (
    <div
      className={`bg-[#191919] p-4 rounded-[19px] mb-3 cursor-pointer hover:bg-[#212121] transition-colors ${classname}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-[#ffffff19] p-3 rounded-[14px] mr-[20px]">
            <Image src={iconSrc} alt={title} width={42} height={42} />
          </div>
          <div>
            <h3 className="text-[19px] font-normal mb-1 mt-1">{title}</h3>
            <p className="text-[#515151] font-medium text-[19px]">
              {description}
            </p>
          </div>
        </div>
        <div className="bg-[#131313] p-[14px] rounded-full mr-[20px]">
          <Image
            src="/assets/svg/uprightArrow.svg"
            alt="Arrow"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
