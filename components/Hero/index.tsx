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
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                <TypingEffect text="Hey 🔥" speed={100} />
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                <TypingEffect
                  text="I'am Saurabh Welcome to my portfolio."
                  speed={100}
                />
              </h1>
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

                        <div className="p-3">
                          <h1 className="text-black font-bold">Saurabh Dantani</h1>
                          <p className="text-black">A Passionate <strong>Full Stack Developer</strong> 🖥️ & having <strong>1 years of Experiences</strong> in 5+ Technologies so far.</p>
                        </div>
                    
                        <div className="flex items-center gap-2 p-3">
                          <button
                            className="relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-white px-3 h-9 cursor-pointer
                                        transition-colors hover:bg-[#F5F5F5] hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                                        disabled:pointer-events-none disabled:opacity-50 group"
                          >
                            <span
                              className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#60A5FA]
                                        before:absolute before:-inset-1 before:z-[-1] before:block before:rounded-md before:border-2 before:border-[#60A5FA]
                                        before:animate-running-light"
                            ></span>
                            <svg
                              className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              stroke="#60A5FA"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="22"
                              width="22"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                              ></path>
                              <path d="M18 14h-8"></path>
                              <path d="M15 18h-5"></path>
                              <path d="M10 6h8v4h-8V6Z"></path>
                            </svg>
                            Articles
                          </button>

                          <button
                            className="relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-white px-3 h-9 cursor-pointer
                                        transition-colors hover:bg-[#F5F5F5] hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                                        disabled:pointer-events-none disabled:opacity-50 group"
                          >
                            <span
                              className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#60A5FA]
                                        before:absolute before:-inset-1 before:z-[-1] before:block before:rounded-md before:border-2 before:border-[#60A5FA]
                                        before:animate-running-light"
                            ></span>
                            <svg
                              className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              stroke="#60A5FA"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="22"
                              width="22"
                              xmlns="http://www.w3.org/2000/svg"
                            >
      <path
        d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
      ></path>
      <path d="M15 3v6h6"></path>
                            </svg>
                            Articles
                          </button>

                          <button
                            className="relative inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-white px-3 h-9 cursor-pointer
                                        transition-colors hover:bg-[#F5F5F5] hover:text-[#60A5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
                                        disabled:pointer-events-none disabled:opacity-50 group"
                          >
                            <span
                              className="absolute inset-0 rounded-md border-2 border-transparent group-hover:border-[#60A5FA]
                                        before:absolute before:-inset-1 before:z-[-1] before:block before:rounded-md before:border-2 before:border-[#60A5FA]
                                        before:animate-running-light"
                            ></span>
                            <svg
                              className="lucide lucide-newspaper text-blue-400 dark:text-blue-600"
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              stroke="#60A5FA"
                              fill="none"
                              viewBox="0 0 24 24"
                              height="22"
                              width="22"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                              ></path>
                              <path d="M18 14h-8"></path>
                              <path d="M15 18h-5"></path>
                              <path d="M10 6h8v4h-8V6Z"></path>
                            </svg>
                            Articles
                          </button>

                          <style>
                            {`@keyframes running-light {
                              0% {
                                border-color: transparent;
                                box-shadow: 0 0 5px #60A5FA, 0 0 10px #60A5FA;
                              }
                              50% {
                                border-color: #60A5FA;
                                box-shadow: 0 0 20px #60A5FA, 0 0 30px #60A5FA;
                              }
                              100% {
                                border-color: transparent;
                                box-shadow: 0 0 5px #60A5FA, 0 0 10px #60A5FA;
                              }
                            }
                            .animate-running-light {
                              animation: running-light 1.5s infinite;
                            }`}
                          </style>
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
