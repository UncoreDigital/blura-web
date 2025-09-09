"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Faq() {
  const faqs = [
    {
      q: "What does “blüra” mean?",
      a: "The word blüra comes from the combination of two words: Blue + Aura. blüra symbolizes calm, clarity, and healing. It’s a pure feeling of sipping pure, untouched water from the Himalayas. And that’s exactly what we aim for: Water that goes beyond the ordinary.",
    },
    {
      q: "From where is blüra water sourced?",
      a: 'blüra water originates from the sacred Giri Ganga, also known as the Giri River. It is a significant tributary of the Yamuna River in Himachal Pradesh. Rising from Kupar Peak and flowing near Khara Pathar in the Jubbal Tehsil of Shimla, this source has long been admired for its purity and mystique. According to a legend, the name "Giri Ganga" means "The Ganga has fallen". It is said that when a sage accidentally spilled his vessel of holy water upon the earth, he cried out "Giri Ganga!", and from that divine spill, the sacred stream was born.',
    },
    {
      q: "Why does blüra use aluminium cans instead of plastic bottles?",
      a: "At Blüra, we are committed to sustainability and environmental responsibility. That’s why we choose aluminium cans over plastic bottles. Aluminium is infinitely recyclable. It doesn’t degrade in quality each time it’s recycled. In fact, over 75% of the aluminium ever produced is still in use today. By using aluminium, we reduce plastic pollution, lower our carbon footprint, and ensure our packaging is both premium and planet-friendly, completely free of microplastics, so your health stays untouched. Additionally, each Blüra can is BPA-free and features a certified food-grade internal lining. It locks in freshness and preserves the water’s natural taste without any metallic aftertaste.",
    },
    {
      q: "Is blüra alkaline water?",
      a: "Yes. blüra is naturally alkaline, which means it’s gentle on your body, soft on the palate, and supports better hydration without any synthetic processing. The PH of water is 7.1 to 8.",
    },
    {
      q: "Does blüra contain sugar, sweeteners, or artificial flavors?",
      a: "No! blüra water is pure, clean, and utterly transparent. Each can is carefully crafted that delivers zero calories, zero sugar, zero sweeteners, and is free from artificial additives and flavors. It's only water and hydration, in it's purest and truest form.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1); // 2nd accordion open by default

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const faqRefs = useRef<HTMLDivElement[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // FAQ items stagger animation
      gsap.fromTo(
        faqRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-16 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Title */}
        <div className="flex-1" ref={titleRef}>
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#071f43]">
            Answers, as Clear as Blüra Water
          </h2>
          <br />
          <p className="font-['Frank_Ruhl_Libre'] text-sm sm:text-base font-light leading-snug">
            Every sip of blüra means purity, which flows 
            as freely as our water. 
            <br />
            That’s why we’ve 
            answered the questions you’re most likely to ask. 
            <br />
            Explore and discover everything you
             need to know in detail 
             <br />about blüra.
          </p>
        </div>

        {/* Right Accordion */}
        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) faqRefs.current[i] = el;
              }}
              className={`transition overflow-hidden ${
                activeIndex === i
                  ? "bg-[#071f43] text-white"
                  : "bg-white shadow-md"
              }`}
            >
              {/* Header */}
              <button
                onClick={() => toggleAccordion(i)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span
                  className={`font-['Frank_Ruhl_Libre'] text-base sm:text-lg font-medium ${
                    activeIndex === i ? "text-white" : "text-black"
                  }`}
                >
                  {item.q}
                </span>
                <span className="text-xl font-bold">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Body */}
              {activeIndex === i && (
                <div className="font-['Frank_Ruhl_Libre'] px-6 pb-4 text-sm sm:text-base opacity-80">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
