import { pricingPlansData } from "@/constants/data";
import Heading from "./ui/heading";
import { PricingTable } from "./ui/table";

const Pricing = () => {
  return (
    <section className="mt-16 p-4">
      <Heading
        title={"explore our"}
        description={"Application Pricing"}
        paragraph={
          "Break down goals, track progress, and stay on top of tasks with custom reminders and visual milestones. Keep focused and organized, anytime, anywhere."
        }
      />
      <div className="flex justify-center py-10">
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-14 ">
          {pricingPlansData.map((plan, index) => {
            return (
              <PricingTable
                key={index}
                index={index}
                plan={plan}
                customStyle={plan.customStyles}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
