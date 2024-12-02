const SectionTitle = ({ title, description, maxWidth, subTitleWidth }) => {
  return (
    <div
      className={`max-w-[${maxWidth ? maxWidth : 1024}px] mx-auto text-center`}
    >
      <h1 className="text-2xl sm:text-5xl font-medium">{title}</h1>
      <p
        className={` max-w-[${
          subTitleWidth ? subTitleWidth : 1026
        }px]  mt-4 text-[#A0A0A0] text-[18px] sm:text-[22px]`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
