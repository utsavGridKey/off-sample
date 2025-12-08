import { useAppContext } from "@/utils/appContext";

const Section8 = () => {
  const { sevenSection } = useAppContext();
  return (
    <section
      ref={sevenSection}
      className="h-screen w-screen opacity-0 absolute top-0 flex-col gap-8 p-4 lg:p-16 bg-white flex justify-center items-center"
    >
      <div className=" inline-flex flex-col justify-start items-center gap-2">
        <div className="justify-center text-black-600 text-5xl font-normal font-['Fjalla_One'] uppercase">
          Built for the bold
        </div>
        <div className="self-stretch text-center justify-center text-grey-500 text-sm font-medium font-['Poppins']">
          If you’re here to play safe, you’ll hate it.
          <br />
          If you’re here to disrupt, pull up a chair.
        </div>
      </div>
      <div className="grid items-center w-full lg:w-2/4 grid-cols-[repeat(auto-fit,minmax(120px,1fr))] lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {Array.from({ length: 12 })?.map((_, index) => {
          return (
            <img
              loading="lazy"
              key={index}
              className="h-26 lg:grayscale lg:hover:grayscale-0 transition-all duration-300 ease-in-out"
              src={`/companiesLogo/logo-${index + 1}.svg`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Section8;
