"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);


export default function Contact() {
const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your Google Form POST URL
    const formUrl =
      "https://script.google.com/macros/s/AKfycbxZDa-eKBQkE_fdOz-OJYMTvKS9ZpQbc2ouOgM6ZiPOEENY8_yP8AuAQ4uxU3lrHd4XrQ/exec";

    // Replace these with actual entry IDs from your form
    const data = new FormData();
    data.append("entry.1234567890", (e.currentTarget.elements.namedItem("name") as HTMLInputElement).value);
    data.append("entry.987654321", (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value);
    data.append("entry.5555555555", (e.currentTarget.elements.namedItem("phone") as HTMLInputElement).value);
    data.append("entry.4444444444", (e.currentTarget.elements.namedItem("business") as HTMLSelectElement).value);
    data.append("entry.3333333333", (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", // 👈 required for Google Forms
        body: data,
      });

      alert("✅ Message sent successfully!");
      formRef.current?.reset();
    } catch (err) {
      console.error("Fetch error:", err);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-4 max-w-lg mx-auto"
    >
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
        <option>Select Business</option>
        <option>Cafe</option>
        <option>Hotels</option>
        <option>Retailers</option>
        <option>Event organizers</option>
        <option>Distributor</option>
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
        className="px-6 py-3 bg-[#071f43] text-white text-[16px] font-semibold shadow transition duration-300 hover:bg-transparent hover:text-[#071f43] hover:border-[#071f43] border cursor-pointer"
      >
        Contact Us Now
      </button>
    </form>
  );
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );

      gsap.fromTo(
        rightRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  return (
    <section ref={sectionRef} className="w-full bg-white" id="contact">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Info */}
        <div ref={leftRef} className="bg-[#071f43] text-white px-6 sm:px-12 lg:px-24 py-12 flex-1 flex flex-col gap-6">
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl font-bold capitalize">be a blüra being</h2>
          <p className="font-['Frank_Ruhl_Libre'] text-sm sm:text-base font-light leading-relaxed">
            blüra is our answer to your luxury that doesn’t come at a planetary
            cost. It’s a brand built on transparency and taste. A chilled can
            against your palm. The first sip. The sudden pause inside you.
            That’s not hydration. That’s healing. That’s nature, grounding you
            again. <br />
            <br />
            If that’s you, welcome. You’re one of us. A{" "}
            <strong>blüra being</strong>.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/CK6SNG0NLD.png)] bg-cover bg-no-repeat" />
              <span className="font-['Frank_Ruhl_Libre']">+91- 7990394138</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/WF6wqEaxAH.png)] bg-cover bg-no-repeat" />
              <span className="font-['Frank_Ruhl_Libre']">contact@bluralife.com</span>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div ref={rightRef} className="bg-white px-6 sm:px-12 lg:px-24 py-12 flex-1">
          <h3 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl mb-2">Have Questions? sadasdad Let’s Connect!</h3>
          <p className="font-['Frank_Ruhl_Libre'] text-gray-700 mb-6">We’re here to help - reach out to learn more</p>

          {/* ✅ Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 border border-green-300">
              {successMessage}
            </div>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="name" placeholder="First Name" required className="border-b border-black px-2 py-2 outline-none" />
              <input type="email" name="email" placeholder="Email Address" required className="border-b border-black px-2 py-2 outline-none" />
            </div>
            <input type="tel" name="phone" placeholder="Phone Number" className="border-b border-black px-2 py-2 outline-none" />
            <select name="business" className="border-b border-black px-2 py-2 outline-none">
              <option>Select Business</option>
              <option>Cafe</option>
              <option>Hotels</option>
              <option>Retailers</option>
              <option>Event organizers</option>
              <option>Distributor</option>
            </select>
            <textarea name="message" placeholder="Write your message..." rows={3} required className="border-b border-black px-2 py-2 outline-none" />
            <button type="submit" className="px-6 py-3 bg-[#071f43] text-white text-[16px] font-semibold shadow transition duration-300 hover:bg-transparent hover:text-[#071f43] hover:border-[#071f43] border cursor-pointer">
              Contact Us Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
