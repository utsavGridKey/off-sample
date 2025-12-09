import { useAppContext } from "@/utils/appContext";

const Section2 = () => {
  const { heroSectionRef, videoRef } = useAppContext();

  const isSmallScreen =
    typeof window !== "undefined" ? window.innerWidth > 600 : false;

  return (
    <section
      ref={heroSectionRef}
      className="h-screen w-screen bg-red-900 opacity-0 absolute top-0"
    >
      <video
        loop
        ref={videoRef}
        playsInline
        className="absolute w-full h-screen object-cover z-0"
      >
        <source
          src={!isSmallScreen ? "/video.mp4" : "mobileVideo.mp4"}
          type="video/mp4"
        />
      </video>
    </section>
  );
};

export default Section2;
