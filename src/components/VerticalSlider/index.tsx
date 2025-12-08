/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { companiesData } from "@/utils/constants";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function VerticalWheel({
  index,
  handleChangeCarousel,
}: {
  index: number;
  handleChangeCarousel: any;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Arc layout slots (always fixed)
  const slots = [
    { x: 200, scale: 0.7, opacity: 0.3 }, // top
    { x: 100, scale: 0.9, opacity: 0.6 }, // upper-middle
    { x: 0, scale: 1.3, opacity: 1 }, // center
    { x: 100, scale: 0.9, opacity: 0.6 }, // lower-middle
    { x: 200, scale: 0.7, opacity: 0.3 }, // bottom
  ];

  // Animate visible items
  useEffect(() => {
    if (!containerRef.current) return;

    const items = Array.from(containerRef.current.children);

    items.forEach((item, i) => {
      const slot = slots[i];

      gsap.to(item, {
        x: slot.x,
        opacity: slot.opacity,
        scale: slot.scale,
        duration: 0.35,
        ease: "power3.out",
      });
    });
  }, [index]);

  // Compute visible images (5 only)
  const visibleImages = [
    companiesData[(index - 2 + companiesData.length) % companiesData.length],
    companiesData[(index - 1 + companiesData.length) % companiesData.length],
    companiesData[index],
    companiesData[(index + 1) % companiesData.length],
    companiesData[(index + 2) % companiesData.length],
  ];

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {visibleImages.map((src, i) => (
          <div
            key={src?.title + i}
            onClick={() => {
              if (i === 2) return; // do nothing if center is clicked
              handleChangeCarousel(i > 2 ? 1 : -1);
            }}
            style={{
              width: 140,
              height: 140,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              loading="lazy"
              src={src.img}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
