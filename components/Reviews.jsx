import { customerReviewsData } from "@/constants/data";
import { LoadAnimation } from "@/global/Animation";
import { ListTree } from "lucide-react";
import Button from "./ui/button";
import { ReviewsCard } from "./ui/card";
import Heading from "./ui/heading";

const Reviews = () => {
  return (
   <LoadAnimation>
     <section  >
      <Heading
        title={"our customer's"}
        description={"Social handel Review's"}
        paragraph={
          "Break down goals, track progress, and stay on top of tasks with custom reminders and visual milestones. Keep focused and organized, anytime, anywhere."
        }
      />

      <div
        className="text-gray-600 dark:text-gray-300 pt-8 dark:bg-gray-900"
        id="reviews"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {customerReviewsData.map((item, index) => {
              return (
                <ReviewsCard
                  key={index}
                  name={item.name}
                  handelName={item.twitterHandle}
                  review={item.review}
                  imageUrl={item.photo}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-center mt-6">
            <Button label={"browse more"} icon={<ListTree />} roundedFull path={'/'}/>
          </div>
        </div>
      </div>
    </section>
   </LoadAnimation>
  );
};

export default Reviews;
