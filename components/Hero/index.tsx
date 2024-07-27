"use client";
import Image from "next/image";
import TypingEffect from 'react-typing-effect';
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full md:w-1/2 items-center align-middle text-center">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                <TypingEffect text="Hey 🔥" speed={100} />
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                <TypingEffect text="I'am Saurabh Welcome to my portfolio." speed={100} />
              </h1>
            </div>

            <div className="w-full md:w-1/2 animate_right lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className="relative aspect-[700/444] w-full">
                  <div className="relative p-1 bg-white rounded-lg shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg blur-sm anima" />
                    
                    <div className="relative z-0 bg-white h-96 rounded-lg p-6">
                      <div className = "m-[5%] z-50 h-96 w-64 bg-gray-700">
                        <h2 className="text-2xl font-bold mb-2">Animated Card</h2>
                        <p className="text-gray-700">This is an animated card border using Tailwind CSS.</p>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default Hero;
