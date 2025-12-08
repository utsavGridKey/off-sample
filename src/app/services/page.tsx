"use client";
import { useState } from "react";

const servicesList = [
  {
    title: "Branding & Identity",
    leftIcon: "/left-branding-identity.svg",
    rightIcon: "/right-branding-identity.svg",
    items: [
      {
        name: "Logo Design",
        images: ["/logo-1.svg", "/logo-2.svg", "/logo-3.svg"],
      },
      "Brand Identity",
      "Brand Strategy",
      {
        name: "Brand Guidelines",
        images: ["/logo-1.svg", "/logo-2.svg", "/logo-3.svg"],
      },
    ],
  },
  {
    title: "Website & Digital Experience",
    leftIcon: "/left-website-digital.svg",
    rightIcon: "/right-website-digital.svg",
    items: [
      "Website Design & Development",
      {
        name: "UI/UX Designing",
        images: ["/logo-1.svg", "/web-logo-2.svg", "/web-logo-3.svg"],
      },
      "Landing Pages",
      "Ecommerce / Shopify / WooCommerce",
    ],
  },
  {
    title: "Content & Creative Production",
    leftIcon: "/left-Content.svg",
    rightIcon: "/right-Content.svg",
    items: [
      "Content Creation",
      "Creative Production",
      "Copywriting",
      "Photography & Videography",
      "Reels / Short-Form / UGC",
    ],
  },
  {
    title: "Social Media & Community Management",
    leftIcon: "/left-SocialMedia-community.svg",
    rightIcon: "/right-SocialMedia-community.svg",
    items: [
      "Social Media Management",
      "Content Strategy",
      "Community Engagement",
      "Influencer Marketing / Creator Collaborations",
    ],
  },
  {
    title: "Performance & Growth Marketing",
    leftIcon: "/left-Performance.svg",
    rightIcon: "/right-performance.svg",
    items: [
      "Meta Ads",
      "Google Ads",
      "Campaign Strategy & Retargeting",
      "SEO & Organic Growth",
    ],
  },
  {
    title: "Motion & Visual Communication",
    leftIcon: "/left-motion.svg",
    rightIcon: "/right-motion.svg",
    items: [
      "Motion Graphics",
      "Animation",
      "Explainer Videos",
      "Visual Effects",
    ],
  },
  {
    title: "Packaging & Physical Brand Assets",
    leftIcon: "/left-packaging.svg",
    rightIcon: "/right-packaging.svg",
    items: [
      "Packaging Design",
      "Box / Label Design",
      "Print Collateral",
      "Offline Brand Assets",
    ],
  },
];

const Services = () => {
  const [openServices, setOpenServices] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const toggleService = (index: number) => {
    setActiveCategory(activeCategory === index ? 0 : index);
    setOpenServices([]);
  };

  const toggleItem = (index: number) => {
    console.log("🚀 ~ toggleItem ~ index:", index);
    // setOpenServices((prev) =>
    //   prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    // );
  };

  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  return (
    <div className="relative w-screen ">
      <div className="bg-[url('/HeaderSection.png')] bg-cover bg-center px-6 lg:px-30 py-16 lg:py-32 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-end pt-30">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-400 text-sm lg:text-base font-medium uppercase tracking-[4px]">
            Our services
          </p>

          <h1 className="font-['Fjalla_One'] uppercase leading-tight lg:leading-[110px] text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white">
            What{" "}
            <span className="text-yellow-500 relative">
              Services
              <svg
                className="absolute right-0 bottom-1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="10"
                viewBox="0 0 300 10"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M288.195 3.66289C230.939 -3.1383 172.941 2.26713 115.659 1.90357C77.7807 1.65213 39.8756 0.0689668 2.02844 8.29878e-06C0.893771 0.000468203 -0.0145209 1.35942 0.0006574 3.04725C0.0165206 4.73506 0.950113 6.101 2.0841 6.10056C39.9272 6.16959 77.8282 7.75283 115.702 8.00435C172.881 8.36979 230.77 2.95618 287.923 9.74908C289.056 9.88086 290.033 8.6325 290.112 6.95312C290.184 5.27387 289.321 3.80495 288.195 3.66289Z"
                  fill="#F7B202"
                />
              </svg>
            </span>
          </h1>
          <h1 className="mt-3 font-['Fjalla_One'] uppercase leading-tight lg:leading-[110px] text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white">
            We’re offering
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <p className="w-full lg:w-1/2 text-gray-400 text-sm sm:text-base font-medium leading-6 text-center lg:text-left">
          Branding, content, performance marketing and everything in between. We
          combine creativity, strategy and data to make your brand impossible to
          ignore.
        </p>
      </div>

      <div className="flex justify-start items-start lg:flex-row flex-col gap-8 p-6 lg:p-20">
        <div className="hidden lg:flex w-1/2  flex-col justify-start items-start gap-4">
          {servicesList.map((service, index) => (
            <div
              key={`${service.title}${index}`}
              onClick={() => toggleService(index)}
              className={`relative flex flex-col justify-start items-start gap-0.5 cursor-pointer w-full p-3 rounded-lg transition-colors`}
            >
              {activeCategory === index && (
                <div className="absolute bottom-[-15px] left-0 w-[155px] h-[10px]p-2"></div>
              )}
              <div className="relative group w-full">
                <div className="flex items-center gap-2">
                  <span
                    className={`transition-opacity duration-200 w-5 h-5 flex items-center justify-center   ${
                      activeCategory === index
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    } `}
                  >
                    <img
                      loading="lazy"
                      src={service.leftIcon}
                      alt=""
                      className="w-5 h-5"
                    />
                  </span>
                  <span
                    className={`relative inline-block text-base font-medium font-['Poppins'] leading-6 transition-colors ${
                      activeCategory === index ? "text-black" : "text-grey-500"
                    }`}
                  >
                    {service.title}
                    {activeCategory === index && (
                      <div className="absolute left-0 -bottom-3 w-full mt-6">
                        <img
                          loading="lazy"
                          src="Line.svg"
                          alt=""
                          className="w-full"
                        />
                      </div>
                    )}
                  </span>
                  <span
                    className={`transition-opacity duration-200 w-5 h-5 flex items-center justify-center   ${
                      activeCategory === index
                        ? "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    } `}
                  >
                    <img
                      loading="lazy"
                      src={service.rightIcon}
                      alt=""
                      className="w-5 h-5"
                    />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden flex w-full justify-between items-center gap-4">
          <button
            className="cursor-pointer"
            onClick={() => {
              setActiveCategory((prev) =>
                prev === 0 ? servicesList.length - 1 : prev - 1,
              );
            }}
          >
            {" "}
            <img
              loading="lazy"
              src="/rightArrow.svg"
              alt="prev"
              className="rotate-180 w-6 md:w-8"
            />
          </button>
          {servicesList
            ?.filter((_, i) => activeCategory === i)
            .map((service, index) => (
              <div
                key={`${service.title}${index}`}
                onClick={() => toggleService(index)}
                className={`relative flex flex-col justify-start items-start gap-0.5 cursor-pointer rounded-lg transition-colors`}
              >
                <p className="font-bold">{service.title}</p>
              </div>
            ))}
          <button
            className="cursor-pointer"
            onClick={() => {
              setActiveCategory((prev) =>
                prev === servicesList.length - 1 ? 0 : prev + 1,
              );
            }}
          >
            <img
              loading="lazy"
              src="/rightArrow.svg"
              alt="next"
              className="w-6 md:w-8"
            />
          </button>
        </div>
        <div className="w-full  flex flex-col justify-start items-start">
          {activeCategory !== null &&
            servicesList[activeCategory]?.items.map((item, index) => (
              <div
                key={`${item}${index}`}
                className={`self-stretch border-b border-grey-200 overflow-hidden transition-all duration-300 ${
                  openServices.includes(index) ? "h-auto" : "h-16"
                }`}
              >
                <div
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleItem(index)}
                >
                  <div
                    className={`text-3xl font-normal font-['Fjalla_One'] uppercase ${
                      openServices.includes(index)
                        ? "text-yellow-600"
                        : "text-black-600"
                    }`}
                  >
                    {typeof item === "string" ? item : item.name}
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div
                      className={`relative w-5 h-5 transition-transform duration-300 ${
                        openServices.includes(index) ? "rotate-45" : ""
                      }`}
                    >
                      <div className="absolute w-5 h-0.5 bg-black-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                      <div className="absolute w-0.5 h-5 bg-black-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </div>
                </div>
                {openServices.includes(index) && (
                  <div className="p-4 pt-0">
                    {typeof item !== "string" &&
                      item.images &&
                      item.images.length > 0 && (
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          {item.images.map((img, idx) => (
                            <img
                              loading="lazy"
                              key={idx}
                              src={img}
                              alt=""
                              className="w-full h-44 object-cover rounded-lg cursor-pointer"
                              draggable={false}
                              onClick={() => setFullscreenImg(img)}
                            />
                          ))}
                        </div>
                      )}
                  </div>
                )}
                {fullscreenImg && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-9999"
                    onClick={() => setFullscreenImg(null)}
                  >
                    <img
                      loading="lazy"
                      src={fullscreenImg}
                      alt="Full View"
                      className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
                    />
                  </div>
                )}
              </div>
            ))}
          {activeCategory === null && (
            <div className="w-full h-64 flex items-center justify-center">
              <p className="text-gray-400 text-lg">
                Select a service category to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
