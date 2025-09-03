"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";

import Hero from "./Hero";
import HeroImg from "./HeroImg";
export default function Hero4() {
  const words = ["STILLNESS", "NATURE", "YOU"];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* <div className="max-w-[1460px] relative mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12
      bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-25/xm3Q7bxtLO.png)] bg-cover bg-center"> */}
      {/* <div className="main-container w-[1460px] h-[592px] relative mx-auto my-0"> */}
      {/* <div className="w-[1460px] h-[586px] bg-[#fff] relative mt-0 mr-0 mb-0 ml-0" /> */}
      <div className="w-full h-[450px] bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-26/rKtrdcdbYU.png)] bg-cover bg-no-repeat absolute top-[100px] left-0 overflow-hidden" />
    {/* </div> */}
      <div className="max-w-[1460px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12
        bg-cover bg-no-repeat bg-[center_calc(40%-30px)] relative my-0">
        {/* Right Image (order 1 in mobile, stays right in desktop) */}
        {/* <div className="order-2 lg:order-2 w-full lg:w-[560px] h-[400px] lg:h-[634px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/NE1XZKpKVi.png')] bg-cover bg-no-repeat lg:self-end lg:translate-y-12 z-0" /> */}
        {/* <img
          src="https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/NE1XZKpKVi.png"
          alt="Hero Image"
          className="order-2 lg:order-2 w-full lg:w-[560px] h-[400px] lg:h-[634px] object-cover lg:self-end lg:translate-y-12 z-0"
        /> */}
        <HeroImg />
        {/* Left Content (order 2 in mobile) */}
        <div className="order-1 lg:order-1 flex flex-col gap-8 items-start max-w-[735px] mt-10 lg:mt-0 lg:pr-2">
          <h1
            data-hover-effect
            className="font-['Frank_Ruhl_Libre'] text-[26px] sm:text-[26px] lg:text-[30px] font-semibold leading-snug text-[#071f43] -mb-8"
          >
            For Souls That Seek Silence Every Sip Returns You
          </h1>
          {/* <h1
            data-hover-effect
            className="font-['Frank_Ruhl_Libre'] text-[26px] sm:text-[32px] lg:text-[40px] lg:text-nowrap font-semibold leading-snug text-[#071f43]"
          >
            TO STILLNESS, TO NATURE, TO YOU.
          </h1> */}

          <h1 className="font-['Frank_Ruhl_Libre'] text-[26px] sm:text-[32px] lg:text-[36px] font-semibold leading-snug text-[#071f43] flex items-center gap-2">
            TO STILLNESS, TO NATURE, TO YOU.
            {/* <span className="blinking-cursor">|</span> */}
          </h1>

          <p
            data-hover-effect
            className="font-['Frank_Ruhl_Libre'] text-[16px] sm:text-[18px] font-light leading-7 text-gray-600"
          >
            Premium natural mineral water sourced from the Himalayan foothills,
            sealed in sleek, sustainable aluminium cans.
          </p>

          <a href="#contact"
            className="
  px-6 py-3 
  bg-[#071f43] 
  text-white 
  font-['Frank_Ruhl_Libre'] 
  text-[16px] font-semibold 
  shadow 
  border border-transparent
  transition duration-300
  hover:bg-transparent hover:text-[#071f43] hover:border-[#071f43] cursor-pointer
" onClick={() => setIsOpen(false)}>
            Elevate Your Hydration
          </a>
        </div>
      </div>

      {/* Marquee Bar */}
      {/* <div className="relative w-full z-10">
        <div className="w-full bg-[#071f43] overflow-hidden mt-[-140px] lg:mt-[-80px] overflow-hidden z-20">
          <div className="flex animate-marquee whitespace-nowrap gap-12 py-4 px-6">
            {[
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
              "A Moment Of Clarity In a Chaotic World",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white text-[18px] font-medium"
              >
                <span>{text}</span>
                <div
                  className="w-6 h-6 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/${
                      [
                        "V64XdgD2CL.png",
                        "NT6M5XPjxy.png",
                        "AhT98fD6qs.png",
                        "thqYuzu7qL.png",
                      ][i]
                    })`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* Marquee Bar */}
      <div className="relative w-full z-10">
        <div className="w-full bg-[#071f43] overflow-hidden mt-[-140px] lg:mt-[-80px] z-20">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* Duplicate the content twice for seamless looping */}
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-2 py-4 px-6 shrink-0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={`${loopIndex}-${i}`}
                    className="flex items-center gap-2 text-white text-[18px] font-medium"
                  >
                    <span>A Moment Of Clarity In a Chaotic World</span>
                    <div
                      className="w-3 h-3 bg-cover bg-no-repeat"
                      style={{
                        backgroundImage: `url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-25/${[
                            "OX6PxTDEen.png",
                            "OX6PxTDEen.png",
                            "OX6PxTDEen.png",
                            "OX6PxTDEen.png",
                          ][i % 4]
                          })`,
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
