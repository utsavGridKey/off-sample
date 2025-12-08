import VerticalCarousel from "@/components/VerticalSlider";
import { useAppContext } from "@/utils/appContext";
import { companiesData } from "@/utils/constants";

const Section7 = ({
  index,
  handleChangeCarousel,
}: {
  index: number;
  handleChangeCarousel: any;
}) => {
  const { sixthSection } = useAppContext();

  return (
    <section
      ref={sixthSection}
      className="h-screen w-screen opacity-0 absolute top-0 bg-white flex justify-center items-center z-5"
    >
      <div className="left-section w-[65%] h-screen flex justify-center items-center">
        {companiesData
          .filter((_, i) => i === index)
          .map((d, i) => {
            return (
              <div
                key={d?.title + i}
                className="relative flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 w-full px-4"
              >
                <img
                  loading="lazy"
                  className="w-full max-w-[250px] lg:max-w-[450px] lg:w-96 lg:h-96 object-contain"
                  src={d.img}
                  alt={d.title}
                />

                <div className="w-full lg:w-96 flex flex-col items-start gap-6">
                  <div className="flex flex-col gap-2 lg:min-h-45">
                    <div className="text-black-600 text-3xl md:text-4xl lg:text-5xl font-['Fjalla_One'] uppercase text-center lg:text-left w-full whitespace-nowrap">
                      {d.title}
                    </div>
                    <div className="text-grey-500 text-sm md:text-base font-medium font-['Poppins']  text-center lg:text-left ">
                      {d.subtitle}
                    </div>
                  </div>

                  <div
                    data-property-1="Default"
                    data-type="BigText"
                    className="inline-flex items-center gap-1 cursor-pointer text-center w-full"
                  >
                    <div className="text-yellow-600 text-lg md:text-xl font-['Fjalla_One'] tracking-wide text-center w-full lg:text-left"></div>
                  </div>
                  <div className="flex gap-2 justify-center items-center w-full lg:justify-start">
                    <button
                      className="cursor-pointer"
                      onClick={() => handleChangeCarousel(-1)}
                    >
                      <img
                        loading="lazy"
                        src="/rightArrow.svg"
                        alt="prev"
                        className="rotate-180 w-6 md:w-8"
                      />
                    </button>
                    <button
                      className="cursor-pointer"
                      onClick={() => handleChangeCarousel(1)}
                    >
                      <img
                        loading="lazy"
                        src="/rightArrow.svg"
                        alt="next"
                        className="w-6 md:w-8"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="right-section w-[35%] h-screen hidden lg:flex">
        <VerticalCarousel
          index={index}
          handleChangeCarousel={handleChangeCarousel}
        />
      </div>
    </section>
  );
};

export default Section7;
