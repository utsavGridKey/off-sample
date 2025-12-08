import { useAppContext } from "@/utils/appContext";
import React from "react";

const Section6 = () => {
  const { fifthSection } = useAppContext();

  return (
    <section
      ref={fifthSection}
      className="h-screen w-screen opacity-0 absolute top-0  flex-col gap-8 bg-white flex "
    >
      <div className="w-full flex flex-col justify-start items-start gap-2 px-6 lg:px-24 pt-24 pb-0">
        <div className="justify-center">
          <span className="text-Black-black-500 text-4xl lg:text-7xl font-normal font-['Fjalla_One'] uppercase">
            Why{" "}
          </span>
          <span className="text-yellow-600 text-4xl lg:text-7xl font-normal font-['Fjalla_One'] uppercase">
            Choose Us
          </span>
          <span className="text-Black-black-500 text-4xl lg:text-7xl font-normal font-['Fjalla_One'] uppercase">
            ?
          </span>
        </div>
        <div className=" w-full lg:w-[40%] justify-center text-justify text-gray-500 text-sm font-medium font-['Poppins'] leading-6">
          We don’t do boring marketing. We build brands people remember and
          campaigns that convert. From branding and websites to social, SEO, ads
          and automation, we mix creativity, data and strategy to get real
          results.
        </div>
      </div>
      <div className="relative h-full p-16 w-full flex bg-[#FCFCFC]">
        {[
          {
            text: `We're`,
            subText1: " not a team of generalists.",
            subText2:
              " a team of specialists who know exactly what they’re doing.",
            background: "#FCFCFC",
            id: 123,
          },
          {
            text: `Every`,
            subText1: "strategy is crafted with purpose,",
            subText2: "idea backed by skill.",
            background: "#F5F5F5",
            id: 124353,
          },
          {
            text: `We`,
            subText1: "don’t take every client that comes our way.",
            subText2: "choose a few, and go all in.",
            background: "#EFEFEF",
            id: 123523,
          },
          {
            text: `Growth`,
            subText1: "isn’t about doing more.",
            subText2: "is about doing it right.",
            background: "#E0E0E0",
            id: 122343,
          },
        ].map((_, index) => {
          return (
            <React.Fragment key={`${_.id}${index}`}>
              <div
                key={`${_.text}${index}`}
                className="hidden lg:flex absolute section-slider gap-4 opacity-0 w-screen h-screen top-0 left-0 p-4"
                style={{
                  marginLeft: index == 0 ? 50 : index * 100 + 50,
                  zIndex: index,
                  backgroundColor: _.background,
                }}
              >
                <p
                  className={`w-24 h-36 justify-center text-grey-300 text-9xl font-semibold font-['Poppins']`}
                >
                  {index + 1}
                </p>
                <div className="relative w-full">
                  <p className="self-stretch justify-center text-Black-black-600 text-9xl font-normal font-['Fjalla_One']">
                    {_.text}
                  </p>
                  <p className="sub1 w-full opacity-0 absolute text-black-300 text-3xl font-normal font-['Poppins'] leading-10 mt-2">
                    {_.subText1}
                  </p>{" "}
                  <p className="sub2 w-full opacity-0 absolute text-black-300 text-3xl font-normal font-['Poppins'] leading-10 mt-2">
                    {_.subText2}
                  </p>
                </div>
              </div>
              <div
                key={`${_.id}${index}`}
                className="lg:hidden absolute section-slider flex gap-4 opacity-0 w-screen h-screen top-0 left-0 p-4"
                style={{
                  marginLeft: 0,
                  zIndex: index,
                  backgroundColor: _.background,
                }}
              >
                <p
                  className={`w-24 h-36 justify-center text-grey-300 text-8xl font-semibold font-['Poppins']`}
                >
                  {index + 1}
                </p>
                <div className="relative w-full">
                  <p className="self-stretch justify-center text-Black-black-600 text-7xl font-normal font-['Fjalla_One']">
                    {_.text}
                  </p>
                  <p className="sub1 w-full opacity-0 absolute text-black-300 text-2xl font-normal font-['Poppins'] leading-10 mt-2">
                    {_.subText1}
                  </p>{" "}
                  <p className="sub2 w-full opacity-0 absolute text-black-300 text-2xl font-normal font-['Poppins'] leading-10 mt-2">
                    {_.subText2}
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Section6;
