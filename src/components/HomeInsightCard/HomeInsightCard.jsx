import Image from 'next/image';

const HomeInsightCard = ({ title, description, tags, imageSrc, altText }) => {
  return (
    <div className="bg-[#ffffff19] rounded-lg shadow-lg relative">
      <div className="pt-6 px-5 pb-10  lg:pt-12 lg:px-11 lg:pb-[78px]">
        <h3 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h3>

        <p className="mb-4 font-normal">{description}</p>

        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#2A2A2A] text-lg px-5 py-3 rounded-xl border border-[#666]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative bg-white rounded-lg overflow-hidden ml-12 lg:ml-24 lg:mt-2 lg:mt-4 bottom-0">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 bg-[#000000]"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>

        {/* The clearer image on top */}
        <div className="relative z-10 ml-14 mt-14 bg-white rounded-xl ">
          <Image
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover border rounded-xl "
            width={652}
            height={450}
          />
        </div>

        {/* Overlay for the background image */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
      </div>
    </div>
  );
};

export default HomeInsightCard;
