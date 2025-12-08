import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-screen px:10 lg:px-32 py-14 bg-black-500 flex flex-col justify-start items-center gap-6">
      <div className="self-stretch inline-flex justify-between items-center  flex-col lg:flex-row gap-10">
        <div
          data-property-1="dark mode"
          className="w-48 inline-flex flex-col justify-center items-center gap-[4.80px]"
        >
          <img
            loading="lazy"
            className="w-24 h-6"
            src="/companyLogoWhite.svg"
          />
        </div>
        <div className="flex justify-start items-center gap-6  flex-col lg:flex-row">
          <div
            data-dropdown-icon="false"
            data-status="Default"
            data-theme="Dark Mode"
            className="flex justify-center items-center gap-1 overflow-hidden"
          >
            <div className="justify-start text-white-600 text-sm font-medium font-['Poppins']">
              About Us
            </div>
          </div>
          <div
            data-dropdown-icon="false"
            data-status="Default"
            data-theme="Dark Mode"
            className="flex justify-center items-center gap-1 overflow-hidden"
          >
            <div className="justify-start text-white-600 text-sm font-medium font-['Poppins']">
              Terms & Conditions
            </div>
          </div>
          <div
            data-dropdown-icon="false"
            data-status="Default"
            data-theme="Dark Mode"
            className="flex justify-center items-center gap-1 overflow-hidden"
          >
            <div className="justify-start text-white-600 text-sm font-medium font-['Poppins']">
              Privacy Policy
            </div>
          </div>
          <div
            data-dropdown-icon="false"
            data-status="Default"
            data-theme="Dark Mode"
            className="flex justify-center items-center gap-1 overflow-hidden"
          >
            <div className="justify-start text-white-600 text-sm font-medium font-['Poppins']">
              Privacy Policy
            </div>
          </div>
          <div
            data-dropdown-icon="false"
            data-status="Default"
            data-theme="Dark Mode"
            className="flex justify-center items-center gap-1 overflow-hidden"
          >
            <div className="justify-start text-white-600 text-sm font-medium font-['Poppins']">
              Refund Policy
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <Link
            href={"https://www.instagram.com/offsocial.in/"}
            target="_blank"
            className="w-6 h-6 flex justify-center items-center gap-3"
          >
            <img loading="lazy" src="/instagramLogo.svg" alt="" />
          </Link>
          <Link
            href={"http://linkedin.com/company/off-social/"}
            target="_blank"
            className="w-6 h-6 inline-flex flex-col justify-center items-center overflow-hidden"
          >
            <img loading="lazy" src="/linkedInLogo.svg" alt="" />
          </Link>
          <Link
            href={"https://x.com/OffSocial79226"}
            target="_blank"
            className="w-6 h-6 inline-flex flex-col justify-center items-center"
          >
            <img loading="lazy" src="/twitterLogo.svg" alt="" />
          </Link>
          <Link
            href={"https://www.facebook.com/profile.php?id=61576979995459"}
            target="_blank"
            className="w-6 h-6 flex justify-center items-center gap-3 overflow-hidden"
          >
            <img loading="lazy" src="/facebookLogo.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className="self-stretch pt-6 border-t border-grey-600 flex flex-col justify-center items-center gap-6">
        <div className="justify-start text-grey-500 text-xs font-normal font-['Inter']">
          Copyright © 2024 OffSocial Private Limited. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
