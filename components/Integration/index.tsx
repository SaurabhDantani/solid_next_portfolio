"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Integration = () => {
  const techStack = [
    { name: "Node.js", logo: "/images/user/saurabh.jpeg" },
    { name: "React.js", logo: "/images/user/saurabh.jpeg" },
    { name: "Express.js", logo: "/images/user/saurabh.jpeg" },
    { name: "Next.js", logo: "/logos/nextjs.svg" },
    { name: "MongoDB", logo: "/logos/mongodb.svg" },
  ];

  // State to manage current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Automatically change the slide every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === techStack.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [techStack.length]);

  return (
    <section>
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Tech Stack</h2>

        <div className="relative overflow-hidden">
          {/* Slider container */}
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: `-${currentSlide * 100}%` }}
            // transition={{ duration: 0.5 }}
            style={{ width: `${techStack.length * 100}%` }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center"
                style={{ width: "100%" }}
              >
                <motion.div
                  className="rounded-full border-4 border-gray-300 hover:border-blue-500 p-4 transition-all duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-16 w-16 rounded-full"
                  />
                </motion.div>
                <motion.span
                  className="text-center text-white text-sm font-medium mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
