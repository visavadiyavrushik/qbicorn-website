import Image from 'next/image';

const HomeInsightCard = ({
  title,
  description,
  tags,
  imageSrc,
  altText,
  imageBg,
}) => {
  return (
    <div className="bg-[#ffffff19] rounded-lg shadow-lg relative">
      <div className="pt-6 px-5 pb-10 lg:pt-7 lg:px-7 lg:pb-[65px]  xl:pt-9 xl:px-8 xl:pb-[65px]  2xl:pt-12 2xl:px-11 2xl:pb-[78px]">
        <h3 className="text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-4xl font-semibold mb-4 lg:max-w-[360px] xl:max-w-[480px]">
          {title}
        </h3>

        <p className="mb-4 font-normal ">{description}</p>

        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#2A2A2A] text-sm md:text-base 2xl:text-lg lg:px-3 py-2 px-2 lg:py-2 2xl:px-5 2xl:py-3 rounded-xl border border-[#666]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative  rounded-lg overflow-hidden ml-0 lg:ml-16  bottom-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 "
          style={{ backgroundImage: `url(${imageBg || imageSrc})` }}
        ></div>

        {/* The clearer image on top */}
        <div className="relative z-10 ml-14 mt-14 bg-white rounded-xl ">
          <Image
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-contain border rounded-xl "
            width={700}
            height={450}
          />
        </div>

        {/* Overlay for the background image */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75 rounded-lg"></div> */}
      </div>
    </div>
  );
};

export default HomeInsightCard;
