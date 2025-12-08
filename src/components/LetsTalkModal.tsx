"use client";
import { useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose }: ModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    reason: "",
    email: "",
    phone: "",
    message: "",
  });

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwA1Vhf3g8Qvf4kfabR1eEFlCko3DRQ1baWMCNhlYXNEslTR_qzwWmDYcNndSvezum_5A/exec";

  const handleChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(formData),
      mode: "no-cors",
    })
      .then(() => {
        alert("Thank you for contacting us! We will get back to you soon.");
      })
      .catch((err) => {
        console.error("Error submitting form:", err);
        alert(
          "There was an error sending your message. Please try again later.",
        );
      });
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-9999 flex items-end lg:items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-neutral-900 rounded-xl shadow-xl max-w-full lg:max-w-[50%] max-h-[95%] overflow-auto flex p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-3 relative"
        >
          <div className="self-stretch pb-4 inline-flex flex-col justify-start items-start gap-2">
            <div className="flex justify-between w-full items-center">
              <div className="justify-center text-white-600 text-4xl font-normal font-['Fjalla_One'] uppercase">
                Let’s Talk
              </div>
              <button onClick={onClose} className="cursor-pointer">
                <img loading="lazy" src="/close.svg" alt="" />
              </button>
            </div>

            <div className="self-stretch justify-center text-grey-500 text-xs font-medium font-['Poppins']">
              We love great ideas, bold brands, and emails that don’t start with
              “Dear Sir/Madam.” Whether you’re ready to scale, start,
              experiment, or just say hi, we’d love to hear from you.
              <br />
              <br />
              Let’s talk, plan, build, and maybe even change the internet a
              little.
            </div>
          </div>
          {/* NAME */}
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
              Hello, I’m
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full lg:w-44 flex-1  border-b border-gray-500 text-yellow-500 py-1 text-xl font-['Caveat'] focus:outline-none"
            />
          </div>

          {/* REASON */}
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
              I’m here because
            </label>
            <input
              type="text"
              name="reason"
              placeholder="You looked cool, so here I am"
              value={formData.reason}
              onChange={handleChange}
              className="w-full flex-1  border-b border-gray-500 text-yellow-500 py-1 text-2xl font-['Caveat'] focus:outline-none"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
              Plz, Contact me @
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full flex-1  border-b border-gray-500 text-yellow-500 py-1 text-xl font-['Caveat'] focus:outline-none"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
              Number, please?
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full flex-1  border-b border-gray-500 text-yellow-500 py-1 text-xl font-['Caveat'] focus:outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
              In short,
            </label>
            <textarea
              name="message"
              rows={2}
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              className="w-full  border-b border-gray-500 text-yellow-500 py-1 text-xl font-['Caveat'] focus:outline-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full lg:w-auto mt-4 bg-white text-black font-['Poppins'] py-3 px-6 rounded-full hover:bg-yellow-500 transition-all self-end"
          >
            Send Message
          </button>
        </form>{" "}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
