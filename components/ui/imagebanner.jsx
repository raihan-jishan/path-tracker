import { AnimateCard } from "@/global/Animation";
import Image from "next/image";
import Button from "./button";

const Imagebanner = ({text, description, firstBtnIcon, secondBtnIcon , firstBtnText , secondBtnText, imagePath, path}) => {
  return (
    <section className="custom-bg">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center  max-lg:flex-col-reverse">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold  leading-tight">
           {text}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-white/80">
            {description}
          </p>
          <div className="flex mt-4 gap-3  max-lg:flex-col">
            <Button
              label={firstBtnText}
              paddingMedium
              roundedFull
              path={path}
              icon={firstBtnIcon}
            />
            <Button
              label={secondBtnText}
              paddingMedium
              roundedFull
              path={path}
              icon={secondBtnIcon}
              customBg
            />
          </div>
        </div>
        <AnimateCard>
          <Image
            alt="Person thinking with TRYING FLOWBITE text"
            className="rounded-lg mix-blend-multiply"
            height="400"
            src={imagePath}
            width="600"
          />
        </AnimateCard>
      </div>
    </section>
  );
};

export default Imagebanner;
