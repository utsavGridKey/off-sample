import { useAppContext } from "@/utils/appContext";
import Link from "next/link";

const Section4 = () => {
  const { thirtSection } = useAppContext();
  // const [showImages, setShowImages] = useState<number | null>(null);

  return (
    <section
      ref={thirtSection}
      className="h-screen w-screen opacity-0 absolute top-0 flex flex-col justify-center gap-8 p-8 md:p-16 bg-white z-3"
    >
      <p className="self-stretch justify-center text-neutral-900 text-base font-normal font-['Poppins'] uppercase tracking-[4.32px]">
        What we do
      </p>
      <div>
        {[
          {
            text: "Branding & Identity",
            img: "branding-&-identity",
          },
          {
            text: "Content & Production",
            img: "content-&-production",
          },
          {
            text: "Social Media & Community",
            img: "social-media-&-com",
          },
          {
            text: "Performance & Marketing",
            img: "performance-&-marketing",
          },
          {
            text: "Motion & Communication",
            img: "motion-&-comm",
          },
          {
            text: "Packaging & Brand Assets",
            img: "packaging-&-brand",
          },
        ].map((_, index) => (
          <div
            key={`${_.text}${index}`}
            className="relative w-full border-t border-b border-grey-200 flex items-center p-4 cursor-pointer group md:hover:bg-yellow-500"
          >
            {/* Text */}
            <button
              // onClick={() => {
              //   setShowImages(index);
              // }}
              className="w-full flex justify-between items-center gap-4"
            >
              <p className="text-black md:group-hover:text-white transition-colors duration-300 text-2xl lgtext-4xl font-normal font-['Fjalla_One'] uppercase relative z-3">
                {_.text}
              </p>
              <img
                loading="lazy"
                src="/plus.svg"
                alt=""
                className="md:hidden flex"
              />
            </button>

            <div className="absolute top-[-33px] right-0  transition-all duration-500 ease-out flex gap-2 lg:gap-10 opacity-0 md:group-hover:opacity-100 z-3">
              <img
                loading="lazy"
                src={`/${_.img}/1.webp`}
                className="w-34 h-34 object-cover rounded-sm"
              />
              <img
                loading="lazy"
                src={`/${_.img}/2.webp`}
                className="w-34 h-34 object-cover rounded-sm"
              />
              <img
                loading="lazy"
                src={`/${_.img}/3.webp`}
                className="w-34 h-34 object-cover rounded-sm"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <div className="text-zinc-500 text-base font-semibold font-['Poppins'] uppercase tracking-[4.32px]">
          And much more...
          <span>
            <Link
              href={"/services"}
              className="justify-center text-yellow-500 text-sm font-medium font-['Poppins'] leading-5 ml-3"
            >
              View All Services
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Section4;
