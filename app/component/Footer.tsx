"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [openTerms, setOpenTerms] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [OpenDisclaimer, setOpenDisclaimer] = useState(false);
  return (
    <footer className="bg-[#071f43] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">

        {/* Left: Logo */}
        <div className="mb-4 sm:mb-0">
          <Link href="/">
            <Image
              src="/footer-logo.png"
              alt="Company Logo"
              width={80}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Center: Social Media with images */}
        <div className="flex flex-col items-center">

          <div className="flex space-x-4">
            <p className="text-sm mb-2">Follow us:</p>
            <Link href="https://www.linkedin.com/company/bluralife/" target="_blank">
              <Image
                src="/LinkedIn_logo_initials.png"
                alt="Facebook"
                width={25}
                height={25}
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://www.instagram.com/bluraofficial/" target="_blank">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://wa.me/message/5LPLNODKABRVO1" target="_blank">
              <Image
                src="/whatsapp.png"
                alt="whatsapp"
                width={30}
                height={30}
                className="hover:opacity-80 transition"
              />
            </Link>

          </div>
        </div>

        {/* Right: Links */}
        <div className="mt-4 sm:mt-0 text-sm space-x-4">
          <Link href="#" className="hover:text-gray-300" onClick={() => setOpenPrivacy(true)}>
            Privacy Policy
          </Link>
          <span>|</span>

          <Link href="#" className="hover:text-gray-300" onClick={() => setOpenTerms(true)}>
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-gray-300" onClick={() => setOpenDisclaimer(true)}>
            Disclaimer
          </Link>
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
            <h2 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre'] text-gray-700">
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
            <h2 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre'] text-gray-700">
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

      {OpenDisclaimer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative">
            <button
              onClick={() => setOpenDisclaimer(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 font-['Frank_Ruhl_Libre'] text-gray-700">
              Disclaimer
            </h2>
            <div className="font-['Frank_Ruhl_Libre'] text-sm leading-relaxed text-gray-700 max-h-80 overflow-y-auto space-y-4">
              <p>This website is intended to share information about Blüra’s natural mineral water and our brand ethos.
                While we take care to ensure accuracy, details may change without notice.
                Blüra is a packaged natural mineral water brand — please store in a cool, dry place and consume immediately after opening.
                We are not liable for any loss or damage arising from the use of this website or the product in ways other than recommended.
              </p>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
}
