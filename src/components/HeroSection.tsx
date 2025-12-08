"use client";
import { useAppContext } from "@/utils/appContext";
import KeyholeShape from "../components/KeyHole";

const HeroSection = () => {
  const { heroSectionRef, keyholeRef } = useAppContext();

  return (
    <div ref={heroSectionRef} className="relative h-full w-full ">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div
        ref={keyholeRef}
        className="relative w-full h-full flex items-center justify-around flex-col"
      >
        <img loading="lazy" src="/companyLogo.svg" alt="" className="z-10" />
        <div className="h-1/2 z-10 flex items-center justify-around w-full">
          <div className="flex">
            <img loading="lazy" src="/peek.svg" alt="" className="z-10" />
            <img
              loading="lazy"
              src="/roundedArrow.svg"
              alt=""
              className="z-10"
            />
          </div>
          <img loading="lazy" src="/" alt="" className="z-10" />
          <img loading="lazy" src="/" alt="" className="z-10" />
        </div>
        <img loading="lazy" src="/companyLogo.svg" alt="" className="z-10" />
        <KeyholeShape />
      </div>
    </div>
  );
};

export default HeroSection;
