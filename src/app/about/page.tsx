"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const mainDivContinerRef = useRef<HTMLDivElement>(null);
  const section1 = useRef<HTMLDivElement>(null);
  const section2 = useRef<HTMLDivElement>(null);
  const section3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const sectionSliders =
      section3.current?.querySelectorAll(".section-slider") ?? [];

    if (!mainDivContinerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainDivContinerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
        },
      });
      tl.to(
        section1.current,
        {
          y: -200,
          opacity: 0,
          duration: 1.5,
        },
        "step1",
      );
      tl.to(
        section1.current,
        {
          y: -800,
          duration: 1.5,
        },
        "step2",
      );
      tl.fromTo(
        section2.current,
        {
          y: 800,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
        },
        "step2",
      );
      sectionSliders.forEach((card, i) => {
        tl.fromTo(
          card,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          i === 0 ? "+=0.2" : "-=0.2",
        );
      });
    }, mainDivContinerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainDivContinerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      <section
        ref={section1}
        className="h-screen w-screen absolute top-0 flex flex-col gap-6 px-6 sm:px-10 lg:px-16 py-10 bg-white"
      >
        <div className="text-[#333] text-sm sm:text-base font-normal font-[Poppins] uppercase tracking-[3px]">
          About us
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
          <div className="flex flex-col w-full lg:w-[380px]">
            <span className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[Fjalla_One] uppercase leading-tight">
              Not a team.
            </span>

            <span className="text-yellow-600 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[Caveat] leading-tight">
              A Rebellion.
            </span>
          </div>

          <div className="text-gray-500 w-full lg:w-[540px] text-sm sm:text-base font-medium font-[Poppins] leading-6 flex items-end">
            We’re a creative collective that ditched the 9-to-5 rulebook. <br />
            No silos.
            <br />
            No junior freelancers ghosting your briefs.
            <br />
            Every project is led by senior creatives, strategists, and weirdos,
            all working like your in-house team — just without the HR.
          </div>
        </div>

        <img
          src="/aboutPage.svg"
          alt="about"
          loading="lazy"
          className="w-full max-w-[1100px] h-auto object-contain mx-auto"
        />
      </section>

      <section
        ref={section2}
        className="h-screen w-screen absolute top-0 flex flex-col lg:flex-row justify-between bg-white content-start "
      >
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 justify-center px-10 lg:px-24 pt-24">
          <div className="justify-center">
            <span className="text-[#111] text-5xl lg:text-7xl font-normal font-['Fjalla_One'] uppercase">
              our{" "}
            </span>
            <span className="text-[#F7B202] text-5xl lg:text-7xl font-normal font-['Fjalla_One'] uppercase">
              values
            </span>
          </div>

          <div className="self-stretch justify-center">
            <span className="text-[#707070] text-sm font-medium font-['Poppins'] leading-5">
              We’re not here to be the biggest agency.
              <br />
              We’re here to be the most{" "}
            </span>
            <span className="text-[#707070] text-sm font-bold font-['Poppins'] leading-5">
              useful{" "}
            </span>
            <span className="text-[#707070] text-sm font-medium font-['Poppins'] leading-5">
              one.
              <br />
              Our work is driven by curiosity, clarity and a little bit of
              chaos. We believe great brands aren’t built by accident, they’re
              built with intention, experimentation and people who genuinely
              care about the outcome.
            </span>
          </div>
        </div>

        <div
          ref={section3}
          className="w-full lg:w-1/2 h-screen flex flex-col  overflow-hidden bg-[#FAFAFA] relative lg:my-10"
        >
          {[
            {
              title: "BUILT FOR FLEXIBILITY",
              desc: "Every brand is different, so every solution should be too. We adapt fast, think faster and build systems that can evolve with you.",
              bg: "#FAFAFA",
            },
            {
              title: "OBSESSED WITH IMPACT",
              desc: "Pretty is nice but results are better. We measure success in conversions, not compliments.",
              bg: "#F5F5F5",
            },
            {
              title: "ANTI-FLUFF. PRO-RESULTS",
              desc: "No jargon. No 60-slide decks. No marketing that sounds like marketing. Just clear strategy and execution that makes sense.",
              bg: "#EFEFEF",
            },
            {
              title: "SMALL TEAM, LOUD WORK",
              desc: "We stay lean on purpose. It keeps us close to the work, close to the results and close to you.",
              bg: "#E0E0E0",
            },
          ].map((item, idx) => (
            <React.Fragment key={`${item.title}${idx}`}>
              <div
                key={idx}
                className={`lg:hidden section-slider opacity-0 translate-y-5 flex-1 w-full p-4 lg:p-5 flex flex-col justify-start gap-2 h-full absolute top-0`}
                style={{
                  marginTop: idx == 0 ? 10 : idx * 80,
                  zIndex: idx,
                  backgroundColor: item.bg,
                }}
              >
                <h2 className="text-[#111] text-[34px] font-normal font-[Fjalla_One] uppercase">
                  {item.title}
                </h2>

                <p className="text-[#707070] text-[14px] font-medium font-[Poppins] leading-[21px] max-w-[480px]">
                  {item.desc}
                </p>
              </div>
              <div
                key={idx}
                className="hidden section-slider opacity-0 translate-y-5 flex-1 w-full p-2 lg:p-5 lg:flex flex-col justify-start gap-2 h-full absolute top-0"
                style={{
                  marginTop: idx == 0 ? 50 : idx * 100 + 50,
                  zIndex: idx,
                  backgroundColor: item.bg,
                }}
              >
                <h2 className="text-[#111] text-[48px] font-normal font-[Fjalla_One] uppercase">
                  {item.title}
                </h2>

                <p className="text-[#707070] text-[14px] font-medium font-[Poppins] leading-[21px] max-w-[480px]">
                  {item.desc}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
