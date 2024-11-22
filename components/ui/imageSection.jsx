"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ImageSection = ({ path }) => {
  return (
    <div className="container p-2 m-2">
      <div className="flex items-center justify-center">
        <motion.div
          className="relative p-2"
          initial={{
            y: 100, // Start from below the viewport
            opacity: 0, // Make it initially invisible
            scale: 0.95, // Slightly scale down to give the 3D effect
          }}
          whileInView={{
            y: 0, // Move to the normal position
            opacity: 1, // Fade in
            scale: 1, // Scale to normal size
          }}
          viewport={{ once: true }} // Trigger animation once when the element comes into view
          transition={{
            duration: 0.7, // Duration of the animation
            ease: "easeOut", // Easing for smooth transition
          }}
        >
          <Image
            src={path}
            alt="product image was not found!"
            width={1200}
            height={600}
            className="rounded-lg max-lg:w-full max-lg:h-full" 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ImageSection;
