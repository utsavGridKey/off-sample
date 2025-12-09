import { useAppContext } from "@/utils/appContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const { secondSection } = useAppContext();
  return (
    <section
      ref={secondSection}
      className="h-screen w-screen opacity-0 absolute top-0 z-10"
    >
      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 px-4">
        {/* Left Graphic (hidden on small screens) */}
        <img
          loading="lazy"
          src="/secondSectionLeft.webp"
          alt=""
          className="hidden lg:block"
        />

        {/* Center Content */}
        <div className="text-container relative flex flex-col items-center justify-center w-full text-center gap-4">
          {/* Main Heading */}
          <h1 className="text-black font-['Fjalla_One'] uppercase text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-[72px]">
            This is not a trend
          </h1>

          {/* Sub Heading */}
          <p className="text-yellow-600 font-['Caveat'] text-lg sm:text-xl md:text-3xl lg:text-5xl">
            {"It's your marketing intervention"}
          </p>

          {/* Paragraph */}
          <p className="text-grey-800 font-medium font-['Poppins'] w-[90%] sm:w-[80%] md:w-2/3 text-sm sm:text-base md:text-lg      ">
            We’re not here to post. We’re here to provoke, react, and redefine.
            Welcome to Off Social — the key to peak marketing performance.
          </p>

          {/* CTA Button */}
          <button className="gap-2 bg-black rounded-lg text-white font-['Poppins'] px-4 py-2 md:px-6 md:py-3 text-sm sm:text-base md:text-lg lg:text-2xl flex items-center justify-center cursor-pointer">
            Let’s Talk
            <img loading="lazy" src="/right.svg" alt="" />
          </button>

          {/* Bottom Doodle */}
        </div>
        <img
          loading="lazy"
          src="/doodleBottom.webp"
          alt=""
          className="doodle-bottom-image absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 lg:w-1/4"
        />

        {/* Right Graphic (hidden on small screens) */}
        <img
          loading="lazy"
          src="/doodleRight.webp"
          alt=""
          className="hidden lg:block"
        />
      </div>
    </section>
  );
};

export default Section3;
