import Heading from "./ui/heading";
import ImageSection from "./ui/imageSection";

const Productivity = () => {
  return (
    <section className="custom-bg">
      <Heading
        title={"Boost your productivity"}
        description={"Diffrent way to track your progress"}
        paragraph={
          "Break down goals, track progress, and stay on top of tasks with custom reminders and visual milestones. Keep focused and organized, anytime, anywhere."
        }
      />
      <ImageSection path={"/assets/product-image.png"} />
    </section>
  );
};

export default Productivity;
