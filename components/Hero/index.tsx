"use client";
import Image from "next/image";
import TypingEffect from "react-typing-effect";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden pb-20 pt-20 lg:pt-40">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between lg:flex-row lg:gap-16">
          {/* Left Section */}
          <div className="w-full text-center lg:w-1/2 lg:text-left dark:text-white">
            <h4 className="mb-3 text-lg font-medium text-gray-700 dark:text-white">
              <TypingEffect text="Hey 🔥" speed={100} />
            </h4>
            <h1 className="mb-6 text-3xl font-bold leading-snug text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
              <TypingEffect
                text="I am Saurabh. Welcome to my portfolio."
                speed={100}
              />
            </h1>
          </div>

          {/* Right Section */}
          <div className="mt-10 w-full lg:mt-0 lg:w-1/2">
            <div className="relative mx-auto max-w-sm rounded-lg bg-white shadow-lg lg:max-w-full">
              <div className="absolute inset-0 z-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-md"></div>
              <div className="relative z-10 p-6">
                {/* Profile Image */}
                <div className="relative mx-auto mb-4 flex justify-center">
                  <Image
                    src="/images/user/saurabh.jpeg"
                    alt="Profile picture of Saurabh Dantani"
                    width={160}
                    height={160}
                    className="rounded-full border-4 border-gradient-to-r from-blue-500 to-green-400"
                  />
                </div>

                {/* Introduction */}
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-900">
                    Saurabh Dantani
                  </h2>
                  <p className="mt-2 text-gray-700">
                    A Passionate <strong>Full Stack Developer</strong> with{" "}
                    <strong>1 year of experience</strong> in 5+ technologies.
                  </p>
                </div>

                {/* Social Media Buttons */}
                <div className="mt-6 flex justify-center space-x-4">
                  <a
                    href="mailto:your.email@example.com"
                    className="inline-block p-2 transition-colors duration-200 hover:text-blue-500"
                    aria-label="Send an email"
                  >
                    <svg
                      className="text-gray-600 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8c-.667.333-2 1-4 2s-3.333 1.667-4 2m6 6c4.333 0 6.5-3 6.5-8S17.333 2 12 2 3.5 5 3.5 10s2.167 8 6.5 8m0-8H3m18 0h-6"></path>
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/your-profile"
                    className="inline-block p-2 transition-colors duration-200 hover:text-blue-500"
                    aria-label="Visit LinkedIn"
                  >
                    <svg
                      className="text-gray-600 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v5.5a.5.5 0 0 1-.5.5H12.5a.5.5 0 0 1-.5-.5V8.5a.5.5 0 0 1 .5-.5h6.5z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/your-number"
                    className="inline-block p-2 transition-colors duration-200 hover:text-blue-500"
                    aria-label="Chat on WhatsApp"
                  >
                    <svg
                      className="text-gray-600 h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 2.05V2a2.5 2.5 0 0 1 2.05 4.05c-.93.93-2.18 1.83-2.68 2.68S2 14 2 14s2.93-.93 4.1-2.1"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
