"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // hamburger and close icons

export default function HeaderResp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1460px] mx-auto h-[84px] flex items-center justify-between px-6 lg:px-[55px]">
        {/* Logo */}
        <Image
          src="/headerlogo.png"
          alt="Blüra Logo"
          width={120}
          height={40}
          priority
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8">
          <a
            href="#our-story"
            className="px-6 py-3 
  text-[#071f43]
  font-['Frank_Ruhl_Libre'] 
  text-[16px] font-semibold 
  border border-transparent
    transition duration-300
  hover:border-[#071f43] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </a>

          <a
            href="#contact"
            className="px-6 py-3 
  text-[#071f43]
  font-['Frank_Ruhl_Libre'] 
  text-[16px] font-semibold 
  border border-transparent
    transition duration-300
  hover:border-[#071f43] cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Contact Us Now
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute w-full left-0 top-[84px] flex flex-col items-center gap-4 py-6 z-50">
          {/* <a
            href="#our-story"
            className="font-['Frank_Ruhl_Libre'] text-[16px] font-semibold text-[#071f43]"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </a>
          <a
            href="#contact"
            className="font-['Frank_Ruhl_Libre'] text-[16px] font-semibold text-[#071f43]"
            onClick={() => setIsOpen(false)}
          >
            Contact Us Now
          </a> */}

          <a
            href="#our-story"
            className="bg-transperant font-['Frank_Ruhl_Libre'] text-[16px] font-semibold text-[#071f43] px-4 py-2 rounded-md transition-colors duration-300 hover:!bg-[#071f43] hover:!text-white"
            onClick={() => setIsOpen(false)}
          >
            Our Story
          </a>

          <a
            href="#contact"
            className="bg-transperant font-['Frank_Ruhl_Libre'] text-[16px] font-semibold text-[#071f43] px-4 py-2 rounded-md transition-colors duration-300 hover:!bg-[#071f43] hover:!text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact Us Now
          </a>
        </div>
      )}
    </header>
  );
}
