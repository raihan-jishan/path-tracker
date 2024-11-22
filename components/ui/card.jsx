import { Twitter } from "lucide-react";
import Image from "next/image";

export const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start px-4 md:px-6 lg:px-8 lg:py-6 py-4 transition-all hover:bg-gray-100 rounded-2xl    ">
      <div className="flex items-center justify-center text-primary hover:animate-pulse">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mt-4">{title}</h3>
      <p className="text-muted-foreground mt-2 text-start lg:text-start text-gray-400">
        {description}
      </p>
    </div>
  );
};

// review's card
export const ReviewsCard = ({ imageUrl, name, handelName, review }) => {
  return (
    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
      <div className="flex gap-4">
        <Image
          className="w-12 h-12 rounded-full"
          src={imageUrl}
          alt="user avatar"
          width="400"
          height="400"
          loading="lazy"
        />
        <div>
          <h6 className="text-lg font-medium text-gray-700 dark:text-white">
            {name}
          </h6>
          <p className="text-sm text-gray-500 dark:text-gray-300 flex gap-2">
          <Twitter  />  {handelName}
          </p>
        </div>
      </div>
      <p className="mt-8">{review}</p>
    </div>
  );
};
