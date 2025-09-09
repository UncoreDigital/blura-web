import Image from "next/image";
import Header from "./component/Header";
import HeaderResp from "./component/HeaderResp";
import Hero from "./component/Hero";
import Hero2 from "./component/Hero2";
import Benefits from "./component/Benifits";
import Benefits2 from "./component/Benifits2";
import ShapeResp from "./component/ShapeResp";
import Reason from "./component/Reason";
import Can from "./component/Can";
import CanBefore from "./component/CanBefore";
import Can3 from "./component/Can3";
import Can4 from "./component/Can4";
import Faq from "./component/Faq";
import Contact from "./component/Contact";
import Hero3 from "./component/Hero3";
import Hero3Resp from "./component/Hero3Resp";
import Hero4 from "./component/Hero4";
import Cursor3 from "./component/Cursor3";
import Cursor4 from "./component/Cursor4";
import Cursor5 from "./component/Cursor5";
import Cursor6 from "./component/Cursor6";
import Cursor7 from "./component/Cursor7";
import Cursor8 from "./component/Cursor8";
import Can2 from "./component/Can2";
import Footer from "./component/Footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <Header /> */}
      <HeaderResp />
      {/* <Hero /> */}
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
      <div className="hero-section cursor-none">
        <Hero4 />
      </div>
      {/* <Hero3Resp /> */}
      {/* <Benefits /> */}
      <Benefits2 />
      <ShapeResp />
      <Reason />
      {/* can after final responsive  */}
      <div className="relative w-full h-[200px] sm:h-[600px] lg:h-[600px] my-16 group">
        {/* Default can */}

        <div className="hidden lg:block absolute inset-0 w-full h-full transition-opacity duration-[2000ms] group-hover:opacity-0">
          <div className="w-full h-full flex items-center justify-center">
            <Can />
          </div>
        </div>

        {/* Hover can */}
        <div className="absolute inset-0 w-full h-[600px]! opacity-0 transition-opacity duration-[2000ms] group-hover:opacity-100">
          <div className="hidden md:block text-white text-center md:h-[600px]!">
            <Can4 />
          </div>

          <div
            className="lg:hidden w-full h-full flex items-center justify-center"
            style={{
              height: "250px",
              width: "1094px",
              backgroundColor: "#071f43",
            }}
          >
            <Can2 />
          </div>
        </div>

        <div
          className="lg:hidden w-full h-full flex items-center justify-center"
          style={{ height: "270px", backgroundColor: "#071f43" }}
        >
          <Can2 />
        </div>
      </div>

      {/* <Can /> */}
      {/* <CanBefore /> */}
      {/* <Can3 /> */}

      {/* can before final responsive */}
      {/* <Can4 /> */}
      <Faq />
      <Contact />
      {/* <Cursor3 /> */}
      {/* <Cursor4 /> */}
      {/* <Cursor5 /> */}
      {/* <Cursor6 /> */}
      {/* <Cursor7 /> */}
      <Cursor8 />
<Footer />  {/* 👈 Footer here */}

      {/* cursor number 5,7 and 8 working */}
    </div>
  );
}
