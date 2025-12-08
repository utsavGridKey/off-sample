"use client";

import { createContext, ReactNode, useContext, useRef } from "react";

type AppContextType = {
  secondSection: React.RefObject<HTMLDivElement> | any;
  thirtSection: React.RefObject<HTMLDivElement> | any;
  fourthSection: React.RefObject<HTMLDivElement> | any;
  keyholeRef: React.RefObject<HTMLDivElement> | any;
  fifthSection: React.RefObject<HTMLDivElement> | any;
  sixthSection: React.RefObject<HTMLDivElement> | any;
  sevenSection: React.RefObject<HTMLDivElement> | any;
  heroSectionRef: React.RefObject<HTMLDivElement> | any;
  navbarSectionRef: React.RefObject<HTMLDivElement> | any;
  videoRef: React.RefObject<HTMLVideoElement> | any;
  flyingButtonRef: React.RefObject<HTMLVideoElement> | any;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const keyholeRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const secondSection = useRef<HTMLDivElement>(null);
  const thirtSection = useRef<HTMLDivElement>(null);
  const fourthSection = useRef<HTMLDivElement>(null);
  const fifthSection = useRef<HTMLDivElement>(null);
  const sixthSection = useRef<HTMLDivElement>(null);
  const sevenSection = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navbarSectionRef = useRef<HTMLDivElement>(null);
  const flyingButtonRef = useRef<HTMLDivElement>(null);

  return (
    <AppContext.Provider
      value={{
        fourthSection,
        heroSectionRef,
        keyholeRef,
        secondSection,
        thirtSection,
        fifthSection,
        sixthSection,
        sevenSection,
        navbarSectionRef,
        videoRef,
        flyingButtonRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used inside AppProvider");
  return context;
};
