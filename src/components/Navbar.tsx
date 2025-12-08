"use client";
import { useAppContext } from "@/utils/appContext";
import Link from "next/link";
import { useState } from "react";
import Modal from "./LetsTalkModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { navbarSectionRef } = useAppContext();

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50">
      <nav
        ref={navbarSectionRef}
        className="fixed z-9999 top-4 rounded-[100px]  border border-white/10 bg-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.10)] backdrop-blur-[20px] w-full max-w-[90%] px-6 py-3 outline-1 -outline-offset-1 outline-white/10 flex justify-between items-center  mx-auto"
      >
        {/* Logo */}
        <div className="w-28 flex items-center">
          <Link href={"/"}>
            <img
              loading="lazy"
              className="h-8 w-auto"
              src="/companyLogo.svg"
              alt="Company Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href={"/services"}
            className="text-Black-black-600 text-sm font-medium font-['Poppins'] cursor-pointer hover:text-black"
          >
            Services
          </Link>
          <Link
            href={"/about"}
            className="text-Black-black-600 text-sm font-medium font-['Poppins'] cursor-pointer hover:text-black"
          >
            About Us
          </Link>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-3 bg-black-600 rounded-4xl flex items-center gap-2 text-white-600 text-sm font-medium font-['Poppins']"
          >
            Let’s Talk
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-black-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "ㄨ" : "彡"}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white backdrop-blur-2xl shadow-2xl rounded-lg p-6 flex flex-col items-center gap-6 md:hidden z-50">
            <Link
              href={"/services"}
              onClick={() => setIsOpen(false)}
              className="text-Black-black-600 text-sm font-medium font-['Poppins'] cursor-pointer hover:text-black"
            >
              Services
            </Link>
            <Link
              href={"/about"}
              onClick={() => setIsOpen(false)}
              className="text-Black-black-600 text-sm font-medium font-['Poppins'] cursor-pointer hover:text-black"
            >
              About Us
            </Link>

            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="px-5 py-3 bg-black-600 rounded-4xl flex items-center gap-2 text-white-600 text-sm font-medium font-['Poppins']"
            >
              Let’s Talk
            </button>
          </div>
        )}
      </nav>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Navbar;
