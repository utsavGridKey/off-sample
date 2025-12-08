import { useAppContext } from "@/utils/appContext";

const Section2 = () => {
  const { heroSectionRef, videoRef } = useAppContext();
  return (
    <section
      ref={heroSectionRef}
      className="h-screen w-screen bg-red-900 opacity-0 absolute top-0"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        ref={videoRef}
        className="absolute  w-full h-screen object-cover z-0"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Section2;
