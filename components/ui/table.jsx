"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./button";
export const PricingTable = ({index, plan, customStyle  }) => {
  return (
    <motion.div
      className={` p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
        index === 1 ? "bg-black text-white" : "" // Apply black background and white text for the second card
      }`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.2 }}
    >
      <h2
        className={`text-[1.5rem] font-semibold text-left ${
          index === 1 ? "text-white" : "text-black" // Change text color based on the index
        }`}
      >
        {plan.name}
      </h2>
      <p
        className={`text-left mt-5 ${
          index === 1 ? "text-white" : "text-black" // Change text color based on the index
        }`}
      >
        <span className="text-5xl font-extrabold">{plan.price}</span>
        <span className="text-xl">{plan.term}</span>
      </p>
      <div className="mt-5">
        <Button
          label={"Get started for free"}
          // For the middle card, apply a different button style
          customBg={`${index === 1 ? "bg-white text-black" : ""}`}
          customStyle={customStyle}
        />
      </div>
      <ul className="mt-6 space-y-6  ">
        {plan.features.map((feature, i) => (
          <li
            key={i}
            className={`${
              index === 1 ? "text-white" : "text-black"
            } flex gap-3  `}
          >
            <Check /> {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
