"use client";
import usePageHook from "@/hooks/usePageHook";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

export default function LandingPage() {
  const { mainDivContinerRef, index, flyingButtonRef, handleChangeCarousel } =
    usePageHook();

  return (
    <>
      <div
        ref={mainDivContinerRef}
        className="relative w-screen h-screen overflow-hidden "
      >
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 index={index} handleChangeCarousel={handleChangeCarousel} />
        <Section8 />
      </div>
      <a
        ref={flyingButtonRef}
        href="#"
        aria-label="Back to top"
        className="opacity-0 fixed bottom-10 right-10 h-15 w-15 bg-gray-300 flex justify-center items-center rounded-full shadow-lg hover:bg-gray-700 transition-opacity  hover:opacity-100"
      >
        <img loading="lazy" src="/right.svg" alt="" className="rotate-270 " />
      </a>
    </>
  );
}
