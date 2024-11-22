import { AlignCenterHorizontal, PictureInPicture } from "lucide-react";
import Imagebanner from "./ui/imagebanner";

const Hero = () => {
  return (
    <Imagebanner
      text={" Grow in life increase Productivity"}
      description={
        " Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
      }
      firstBtnText={"Get Started"}
      path={'/getstart'}
      secondBtnText={"watch vedio"}
      firstBtnIcon={<AlignCenterHorizontal />}
      secondBtnIcon={<PictureInPicture />}
      imagePath={"/assets/hero.png"}
    />
  );
};

export default Hero;
