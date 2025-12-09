/* eslint-disable react-hooks/exhaustive-deps */

import { useAppContext } from "@/utils/appContext";
import { companiesData } from "@/utils/constants";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const usePageHook = () => {
  const {
    heroSectionRef,
    keyholeRef,
    secondSection,
    thirtSection,
    fourthSection,
    fifthSection,
    sixthSection,
    sevenSection,
    navbarSectionRef,
    videoRef,
    flyingButtonRef,
  } = useAppContext();
  const mainDivContinerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState<number>(0);

  const handleChangeCarousel = (dir: number) => {
    setIndex(
      (prev) => (prev + dir + companiesData.length) % companiesData.length,
    );
  };

  useLayoutEffect(() => {
    if (!mainDivContinerRef.current) return;

    const secondSectionTextContainer =
      secondSection.current?.querySelectorAll(".text-container");
    const secondSectionBottomImage = secondSection.current?.querySelectorAll(
      ".doodle-bottom-image",
    );
    const cards = fourthSection.current?.querySelectorAll(".fourth-card");
    const sectionSliders =
      fifthSection.current?.querySelectorAll(".section-slider");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: mainDivContinerRef.current,
          start: "top top",
          end: "+=20000",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        keyholeRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 1,
        },
        {
          scale: 100,
          opacity: 0,
          duration: 1,
          onReverseComplete: () => {
            if (videoRef.current) videoRef.current.pause();
          },
        },

        "showNavbar",
      );
      tl.fromTo(
        navbarSectionRef.current,
        {
          opacity: 0,
          position: "absolute",
        },
        {
          opacity: 1,
          position: "sticky",
        },
        "showNavbar",
      );
      tl.fromTo(
        heroSectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          onStart: () => {
            if (videoRef.current) videoRef.current.play();
          },
          onReverseComplete: () => {
            if (videoRef.current) videoRef.current.play();
          },
        },

        "<",
      ).to(heroSectionRef.current, {
        y: -800,
        opacity: 0,
        zIndex: 0,
      });
      tl.fromTo(
        secondSection.current,
        {
          y: 800,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          onStart: () => {
            if (videoRef.current) videoRef.current.pause();
          },
          onReverseComplete: () => {
            if (videoRef.current) videoRef.current.play();
          },
        },
        "<",
      )
        .to(secondSection.current, { duration: 1 })
        .to(secondSectionTextContainer, { y: -500, opacity: 0 }, "<")
        .to(secondSectionBottomImage, { y: 200, opacity: 0 }, "<")
        .to(
          secondSection.current,
          {
            y: -500,
            opacity: 0,
            zIndex: 0,
          },
          "<",
        );
      tl.fromTo(
        thirtSection.current,
        {
          y: 800,
          opacity: 0,
        },
        { y: 0, opacity: 1, zIndex: 99999 },
        "<",
      ).to(thirtSection.current, {
        y: -800,
        zIndex: 0,
      });

      tl.fromTo(
        fourthSection.current,
        { opacity: 0 },
        {
          opacity: 1,
        },
      );
      tl.fromTo(
        cards,
        {
          y: 800,
          opacity: 1,
          stagger: 1,
        },
        {
          y: (d) => {
            return d * 35;
          },
          opacity: 1,
          stagger: 1,
        },
      );
      tl.to(fourthSection.current, { duration: 1 });
      tl.to(fourthSection.current, { y: -800, zIndex: 0 });
      tl.fromTo(
        fifthSection.current,
        { y: 800, opacity: 0 },
        { y: 0, opacity: 1 },
      );
      sectionSliders.forEach((card: any) => {
        const sub1 = card.querySelector(".sub1");
        const sub2 = card.querySelector(".sub2");

        tl.fromTo(
          card,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
          "<",
        );

        tl.to(sub1, { opacity: 1, y: 0 })
          .to(sub1, { opacity: 0, y: -20 })
          .to(sub2, { opacity: 1, y: 0 });
      });
      tl.to(fifthSection.current, { y: -800, opacity: 0 });
      tl.fromTo(
        sixthSection.current,
        { y: 800, opacity: 0 },
        { y: 0, opacity: 1 },
      )
        .to(sixthSection.current, { duration: 1 })
        .to(sixthSection.current, { opacity: 0, y: -800 });
      tl.fromTo(
        sevenSection.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
      ).to(sevenSection.current, { duration: 1 });
      tl.add(() => {
        gsap.set(mainDivContinerRef.current, { clearProps: "position" }); // unpin
      });
      tl.add(() => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.disable());
      });
    });

    return () => ctx.revert();
  }, []);

  return {
    mainDivContinerRef,
    heroSectionRef,
    keyholeRef,
    secondSection,
    thirtSection,
    fourthSection,
    fifthSection,
    sixthSection,
    index,
    setIndex,
    handleChangeCarousel,
    flyingButtonRef,
  };
};

export default usePageHook;
