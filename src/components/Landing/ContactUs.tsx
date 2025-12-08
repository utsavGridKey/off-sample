"use client";
import { useState } from "react";

const ContactUs = () => {
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

  return (
    <div
      data-theme="dark"
      className="contactUsBg w-screen min-h-screen relative bg-neutral-900 overflow-hidden px-6 sm:px-10 md:px-16 py-12 flex flex-col lg:flex-row justify-between items-center"
    >
      {/* LEFT FORM BLOCK */}
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-[55%] flex flex-col gap-6 relative z-20"
      >
        {/* NAME */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
            Hello, I’m
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full lg:w-44 flex-1  border-b border-gray-500 text-yellow-500 px-3 py-3 text-xl font-['Caveat'] focus:outline-none"
          />
        </div>

        {/* REASON */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
            I’m here because
          </label>
          <input
            type="text"
            name="reason"
            placeholder="You looked cool, so here I am"
            value={formData.reason}
            onChange={handleChange}
            className="w-full flex-1  border-b border-gray-500 text-yellow-500 px-3 py-3 text-2xl font-['Caveat'] focus:outline-none"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
            Plz, Contact me @
          </label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full flex-1  border-b border-gray-500 text-yellow-500 px-3 py-3 text-xl font-['Caveat'] focus:outline-none"
          />
        </div>

        {/* PHONE */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
            Number, please?
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full flex-1  border-b border-gray-500 text-yellow-500 px-3 py-3 text-xl font-['Caveat'] focus:outline-none"
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col gap-2">
          <label className="w-full lg:w-44 text-white text-xl sm:text-2xl font-['Fjalla_One'] uppercase">
            In short,
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full  border-b border-gray-500 text-yellow-500 px-3 py-3 text-xl font-['Caveat'] focus:outline-none"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full flex gap-2 lg:w-auto mt-4 bg-white text-black font-['Poppins'] py-3 px-6 rounded-full hover:bg-yellow-500 transition-all self-start"
        >
          <img loading="lazy" src="/send.svg" alt="" />
          Send Message
        </button>
      </form>

      {/* RIGHT STATIC INFO (UNCHANGED) */}
      <div className="w-full lg:w-[40%] mt-10 lg:mt-0 relative z-20 flex flex-col gap-6">
        <h2 className="text-white text-4xl sm:text-5xl font-['Fjalla_One'] uppercase">
          Contact Us
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-['Poppins'] leading-relaxed">
          {`We love great ideas, bold brands, and emails that don’t start with
          “Dear Sir/Madam.” Whether you're ready to scale, start, experiment, or
          just say hi, we’d love to hear from you.`}
          <br />
          <br />
          Let’s talk, plan, build, and maybe even change the internet a little.
        </p>

        <div className="text-gray-200 space-y-3 text-sm sm:text-base flex flex-col gap-4">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="w-4 h-4 relative overflow-hidden">
                <img loading="lazy" src="/email.svg" alt="" />
              </div>
              <div className="flex-1 justify-start text-grey-500 text-sm font-normal font-['Inter'] leading-6">
                Email Id
              </div>
            </div>
            <div className="self-stretch justify-start text-grey-200 text-sm font-normal font-['Inter'] underline leading-6">
              hello@offsocial.in
            </div>
          </div>
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="w-4 h-4 relative overflow-hidden">
                <img loading="lazy" src="/phone.svg" alt="" />
              </div>
              <div className="flex-1 justify-start text-grey-500 text-sm font-normal font-['Inter'] leading-6">
                Phone No.
              </div>
            </div>
            <div className="self-stretch justify-start text-grey-200 text-sm font-normal font-['Inter'] underline leading-6">
              +91 96386 39333
            </div>
          </div>
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-1">
            <div className="self-stretch inline-flex justify-center items-center gap-2">
              <div className="w-4 h-4 relative overflow-hidden">
                <img loading="lazy" src="/address.svg" alt="" />
              </div>
              <div className="flex-1 justify-start text-grey-500 text-sm font-normal font-['Inter'] leading-6">
                Address
              </div>
            </div>
            <div className="self-stretch justify-start text-grey-200 text-sm font-normal font-['Inter'] underline leading-6">
              509, International Finance Center, Fire Station, VIP Road, Vesu,
              Surat, Gujarat 395007
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
