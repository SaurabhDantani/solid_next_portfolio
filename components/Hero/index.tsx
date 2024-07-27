"use client";
import Image from "next/image";
import TypingEffect from "react-typing-effect";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full items-center text-center align-middle md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                <TypingEffect text="Hey 🔥" speed={100} />
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                <TypingEffect
                  text="I'am Saurabh Welcome to my portfolio."
                  speed={100}
                />
              </h1> */}
            </div>

            <div className="animate_right w-full md:w-1/2 lg:block">
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
                  <div className="relative rounded-lg bg-white p-1 shadow-lg">
                    <div className="anima absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-sm" />

                    <div className="relative z-0 h-96 rounded-lg bg-white p-6 ">
                      <div className="top-[3%] z-50 mx-auto h-80 max-w-c-1390 bg-pink-200">

                        <div className="overflow-hidden flex justify-center items-center bg-[url('/images/user/background.jpg')] bg-cover bg-center">
                        <Image
                          src="/images/user/saurabh.jpeg"
                          alt="shape"
                          width={90}
                          height={21.66}
                          className="z-50"
                        />
                        </div>

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
