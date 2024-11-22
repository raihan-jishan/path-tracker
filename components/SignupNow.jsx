import Heading from "@/components/ui/heading";
import { LoadAnimation } from "@/global/Animation";
import { ListTree } from "lucide-react";
import Button from "./ui/button";

const SignupNow = () => {
  return (
    <LoadAnimation>
      <section className="custom-bg p-1">
        <Heading
          title={"start journey"}
          description={"Signup for free today"}
        />

        <div className="flex items-center justify-center mt-2">
          <Button path={'/getstart'} label={"Get free now"} icon={<ListTree />} roundedFull  />
        </div>
      </section>
    </LoadAnimation>
  );
};

export default SignupNow;
