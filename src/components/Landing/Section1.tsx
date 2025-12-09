import { useAppContext } from "@/utils/appContext";
import Image from "next/image";

const Section1 = () => {
  const { keyholeRef } = useAppContext();
  return (
    <section
      ref={keyholeRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <Image
        src="/fullPageSvg.webp"
        alt=""
        fill
        className="absolute inset-0 z-1 object-cover hidden md:flex"
        loading="lazy"
      />
      <Image
        src="/landingPageMobile.webp"
        alt=""
        fill
        className="absolute inset-0 z-1 object-cover flex  md:hidden"
        loading="lazy"
      />
    </section>
  );
};

export default Section1;
