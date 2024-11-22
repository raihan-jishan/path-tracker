"use client"; // Use this for Next.js client-side rendering

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimateCard = ({ children }) => {
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  // Update scrollY value when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll-based 3D transform values
  const rotateX = scrollY * 0.1; // Rotate based on scroll Y position
  const rotateY = scrollY * 0.1; // Rotate based on scroll Y position

  return (
    <div className="md:w-1/2 mt-8 md:mt-0">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }} // Scale on hover
        whileTap={{ scale: 0.95 }} // Shrink on tap
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="relative"
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ rotateX, rotateY }} // Apply rotation based on scroll position
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          {children}
          <a
            className="absolute inset-0 flex items-center justify-center"
            href="#"
          >
            <i className="fab fa-youtube text-red-600 text-6xl"></i>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export const LoadAnimation = ({
  children,
  className,
  delay = 0.2,
  reverse,
}) => {
  return (
    <motion.div
      className={cn("w-full h-full", className)}
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ delay: delay, duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
