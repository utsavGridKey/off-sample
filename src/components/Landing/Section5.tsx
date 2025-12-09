import { useAppContext } from "@/utils/appContext";

const Section5 = () => {
  const { fourthSection } = useAppContext();

  return (
    <section
      ref={fourthSection}
      className="h-screen w-screen opacity-0 absolute top-0 flex-col gap-8 p-16 bg-white flex justify-center items-center"
    >
      <div className="opacity-0 fourth-card absolute w-[316px] lg:w-[677.01px] h-72 px-10 py-6 origin-top-left rotate-[-3.71deg] bg-yellow-600 rounded-4xl shadow-[4px_8px_28px_0px_rgba(0,0,0,0.25)] outline-2 outline-white inline-flex justify-start items-center gap-2 overflow-hidden">
        <img
          loading="lazy"
          src="/instagram.webp"
          alt=""
          className="absolute right-0 hidden lg:block"
        />
        <div className="w-80 justify-center text-black text-3xl font-semibold font-['poppins'] leading-12">
          Our Instagram looks busy but says nothing.
        </div>
      </div>
      <div className="opacity-0 fourth-card absolute  w-[316px] lg:w-[677.01px] h-72 px-10 py-6 origin-top-left rotate-[3.28deg] bg-black rounded-4xl shadow-[4px_8px_28px_0px_rgba(0,0,0,0.25)] outline-2 outline-white inline-flex justify-start items-center gap-2 overflow-hidden">
        <img
          loading="lazy"
          src="/checklist.webp"
          alt=""
          className="absolute right-0 hidden lg:block"
        />
        <div className="w-80 justify-center text-white text-3xl font-semibold font-['poppins'] leading-12">
          We hired an agency and ended up babysitting the briefs.
        </div>
      </div>
      <div className="opacity-0 fourth-card absolute w-[316px] lg:w-[677.01px] h-72 px-10 py-6 origin-top-left rotate-[-6.77deg] bg-yellow-600 rounded-4xl shadow-[4px_8px_28px_0px_rgba(0,0,0,0.25)] outline-2 outline-white inline-flex justify-start items-center gap-2 overflow-hidden">
        <img
          loading="lazy"
          src="/star.webp"
          alt=""
          className="absolute right-0 hidden lg:block"
        />
        <div className="w-80 justify-center text-black text-3xl font-semibold font-['poppins'] leading-12">
          Everything is ‘on trend’ but no one remembers us.{" "}
        </div>
      </div>
      <div className="opacity-0 fourth-card absolute  w-[316px] lg:w-[677.01px] h-72 px-10 py-6 origin-top-left rotate-[4.84deg] bg-black rounded-4xl shadow-[4px_8px_28px_0px_rgba(0,0,0,0.25)] outline-2 outline-white inline-flex justify-start items-center gap-2 overflow-hidden">
        <img
          loading="lazy"
          src="/trending.webp"
          alt=""
          className="absolute right-0 hidden lg:block"
        />
        <div className="w-80 justify-center text-white text-3xl font-semibold font-['poppins'] leading-12">
          We want to scale, not just post.{" "}
        </div>
      </div>
    </section>
  );
};

export default Section5;
