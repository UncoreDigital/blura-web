"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);


  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left info animates from left
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

      // Right form animates from right
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white" id="contact">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Info */}
        <div
          ref={leftRef}
          className="bg-[#071f43] text-white px-6 sm:px-12 lg:px-24 py-12 flex-1 flex flex-col gap-6"
        >
          <h2 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl font-bold capitalize">
            be a blüra being
          </h2>
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
        <div
          ref={rightRef}
          className="bg-white px-6 sm:px-12 lg:px-24 py-12 flex-1"
        >
          <h3 className="font-['Frank_Ruhl_Libre'] text-3xl sm:text-4xl font-['Frank_Ruhl_Libre'] mb-2">
            Have Questions? Let’s Connect!
          </h3>
          <p className="font-['Frank_Ruhl_Libre'] text-gray-700 mb-6">
            We’re here to help - reach out to learn more
          </p>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="font-['Frank_Ruhl_Libre'] flex-1 border-b border-black px-2 py-2 outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="font-['Frank_Ruhl_Libre'] flex-1 border-b border-black px-2 py-2 outline-none"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="font-['Frank_Ruhl_Libre'] border-b border-black px-2 py-2 outline-none"
            />
            <select className="font-['Frank_Ruhl_Libre'] border-b border-black px-2 py-2 outline-none">
              <option>Select Business</option>
              <option>Cafe</option>
              <option>Hotels</option>
              <option>Retailers</option>
              <option>Event organizers</option>
              <option>Distributor</option>
            </select>
            <textarea
              placeholder="Write your message..."
              rows={3}
              className="font-['Frank_Ruhl_Libre'] border-b border-black px-2 py-2 outline-none"
            />
            <button
              type="submit"
              className="font-['Frank_Ruhl_Libre'] self-start w-fit inline-flex px-6 py-3 bg-[#071f43] text-white font-['Frank_Ruhl_Libre'] text-[16px] font-semibold shadow border border-transparent transition duration-300 hover:bg-transparent hover:text-[#071f43] hover:border-[#071f43] cursor-pointer"
            >
              Contact Us Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bg-[#071f43] text-white py-4 px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Logo */}
        <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
          <Image
            src="/footer-logo.png"
            alt="Blüra Logo"
            width={96}
            height={24}
            className="object-contain"
          />
        </div>
        {/* Center Social */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
          <span className="font-['Frank_Ruhl_Libre'] font-['Frank_Ruhl_Libre'] text-sm">Follow us:</span>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/bluraofficial/" target="_blank" rel="noopener noreferrer">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/CnuVmABEOQ.png)] bg-cover" />
            </a>
            <a href="#">
              <div className="w-5 h-5 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-21/SFavkccuQP.png)] bg-cover" />
            </a>
            <a href="https://www.linkedin.com/company/bluralife/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
        {/* Right Links */}
        <div className="flex gap-8 w-full sm:w-auto justify-center sm:justify-end">
          <a href="#" className="font-['Frank_Ruhl_Libre'] text-sm" onClick={() => setOpenTerms(true)}>
            Terms & Conditions
          </a>
          <a href="#" className="font-['Frank_Ruhl_Libre'] text-sm" onClick={() => setOpenPrivacy(true)}>
            Privacy Policy
          </a>
        </div>
      </div>

      {openTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full relative">
            <button
              onClick={() => setOpenTerms(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre']">
              Terms & Conditions
            </h2>
            <div className="text-sm font-['Frank_Ruhl_Libre'] leading-relaxed text-gray-700 max-h-80 overflow-y-auto space-y-4">
              <p>
                Welcome to Blüra’s official website. By browsing this site, you agree to the following terms:
              </p>
              <p>
                <strong>Content Ownership:</strong> All text, images, and logos are the property of Blüra and may not be copied or used without written permission.
              </p>
              <p>
                <strong>Informational Purpose:</strong> The content on this site is for general information about Blüra and our products. It does not constitute advice.
              </p>
              <p>
                <strong>Accuracy:</strong> We strive for accuracy but do not guarantee that all information is free from errors.
              </p>
              <p>
                <strong>External Links:</strong> We are not responsible for the content of any external sites we link to.
              </p>
              <p>
                If you disagree with these terms, please do not use this website.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {openPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setOpenPrivacy(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre']">
              Privacy Policy
            </h2>
            <div className="font-['Frank_Ruhl_Libre'] text-sm leading-relaxed text-gray-700 max-h-80 overflow-y-auto space-y-4">
              <p>Blüra respects your privacy. We do not sell, rent, or trade your personal information.</p>
              <p>Any details you share through our contact form, email, or social media are used only to respond to your inquiries or share information you’ve requested.</p>
              <p>We may use website analytics (such as Google Analytics) to understand visitor interactions and improve our site. These tools may use cookies, which you can disable in your browser settings.</p>
              <p>
                By using our website, you agree to this policy. If you have questions, write to us at{" "}
                <span className="font-['Frank_Ruhl_Libre'] text-base sm:text-lg lg:text-[18px] font-semibold text-black text-center">
                  contact@bluralife.com.
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
