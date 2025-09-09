import Image from "next/image";
import Link from "next/link";

export default function Footer() {
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
            <Link href="https://facebook.com" target="_blank">
              <Image 
                src="/facebook.png" 
                alt="Facebook" 
                width={25} 
                height={25} 
                className="hover:opacity-80 transition"
              />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image 
                src="/instagram.png" 
                alt="Instagram" 
                width={30} 
                height={30} 
                className="hover:opacity-80 transition"
              />
            </Link>
                        <Link href="https://whatsapp.com" target="_blank">
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
          <Link href="#" className="hover:text-gray-300">
            Terms & Conditions
          </Link>
          <span>|</span>
          <Link href="#" className="hover:text-gray-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
