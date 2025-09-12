"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const [successMessage, setSuccessMessage] = useState<string>("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;
    const formData = new FormData(formRef.current);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxZDa-eKBQkE_fdOz-OJYMTvKS9ZpQbc2ouOgM6ZiPOEENY8_yP8AuAQ4uxU3lrHd4XrQ/exec", // Replace with your Google Apps Script URL
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Server response:", result);

      if (result.result === "success") {
        setSuccessMessage("Your message has been sent successfully!");
        formRef.current.reset();
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setSuccessMessage("Error sending message. Please try again.");
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(
          leftRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (rightRef.current) {
        gsap.fromTo(
          rightRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef.current); // Pass the DOM element

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white" id="contact">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Info */}
        <div
          ref={leftRef}
          className="bg-[#071f43] text-white px-6 sm:px-12 lg:px-24 py-12 flex-1 flex flex-col gap-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold capitalize">
            be a blüra being
          </h2>
          <p className="text-sm sm:text-base font-light leading-relaxed">
            blüra is our answer to your luxury that doesn’t come at a planetary cost...
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <span>+91- 7990394138</span>
            </div>
            <div className="flex gap-3 items-center">
              <span>contact@bluralife.com</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div
          ref={rightRef}
          className="bg-white px-6 sm:px-12 lg:px-24 py-12 flex-1"
        >
          <h3 className="text-3xl sm:text-4xl mb-2">
            Have Questions? Let’s Connect!
          </h3>
          <p className="text-gray-700 mb-6">
            We’re here to help - reach out to learn more
          </p>

          {successMessage && (
            <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 border border-green-300">
              {successMessage}
            </div>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                required
                className="border-b border-black px-2 py-2 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="border-b border-black px-2 py-2 outline-none"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border-b border-black px-2 py-2 outline-none"
            />
            <select
              name="business"
              className="border-b border-black px-2 py-2 outline-none"
            >
              <option value="">Select Business</option>
              <option value="Cafe">Cafe</option>
              <option value="Hotels">Hotels</option>
              <option value="Retailers">Retailers</option>
              <option value="Event organizers">Event organizers</option>
              <option value="Distributor">Distributor</option>
            </select>
            <textarea
              name="message"
              placeholder="Write your message..."
              rows={3}
              required
              className="border-b border-black px-2 py-2 outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#071f43] text-white text-[16px] font-semibold shadow hover:bg-transparent hover:text-[#071f43] hover:border-[#071f43] border"
            >
              Contact Us Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
