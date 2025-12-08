"use client";
import LandingPage from "@/components/Landing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return <LandingPage />;
}
