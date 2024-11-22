import { featuresData } from "@/constants/data";
import { LoadAnimation } from "@/global/Animation";
import { FeatureCard } from "./ui/card";
import Heading from "./ui/heading";

const Features = () => {
  return (
    <LoadAnimation>
      <section>
      <Heading
        title={"explore our"}
        description={"Application Features"}
        paragraph={
          "Break down goals, track progress, and stay on top of tasks with custom reminders and visual milestones. Keep focused and organized, anytime, anywhere."
        }
      />

      <div className="container mx-auto p-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuresData.map((item, index) => {
            return (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
    </LoadAnimation>
  );
};

export default Features;
