import Imagebanner from "@/components/ui/imagebanner";
import { GrAppleAppStore } from "react-icons/gr";
import { PiGooglePlayLogo } from "react-icons/pi";
const getstart = () => {
  return (
    <Imagebanner
      text={" Track you goal's right Now!"}
      description={
        "Stay focused and motivated as you set, track, and achieve your goals with ease using the Path Tracker app. Keep progress visible and success within reach!"
      }
      firstBtnText={"Google play"}
      secondBtnText={"Ios  "}
      firstBtnIcon={
         <PiGooglePlayLogo size={20}/>
      }
      secondBtnIcon={
        <GrAppleAppStore size={25}  />
      }
      imagePath={"/assets/download-app.png"}
    />
  );
};

export default getstart;
