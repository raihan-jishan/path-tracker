const Heading = ({
  title,
  textLarge,
  textMedium,
  textSmall,
  description,
  paragraph,
}) => {
  return (
    <div className="text-center mt-12 ">
      <h1
        className={` ${textLarge ? "text-4xl" : ""} ${
          textMedium ? "text-3xl" : ""
        } ${
          textSmall ? "text-xl" : ""
        } font-bold   text-center capitalize tracking-wide `}
      >
        <span className="border-2 border-black font-extralight p-2 rounded-full  shadow-xl">
          {title}
        </span>
      </h1>
      <div className=" flex items-center justify-center">
        <h2 className="w-1/3 mt-12 text-4xl font-bold max-lg:w-full max-lg:p-4  ">
          {description}
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <p className="mt-5 w-2/3 text-gray-900 max-lg:w-11/12 max-lg:text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default Heading;
