import Footer from "@/components/Footer";
import ContactUs from "@/components/Landing/ContactUs";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/utils/appContext";
import type { Metadata } from "next";
import {
  Caveat,
  Fjalla_One,
  Geist,
  Geist_Mono,
  Inter,
  Poppins,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla",
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Off Social",
  description: "Marketing with Off Social made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/companyLogoWhite.svg" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fjallaOne.variable} ${caveat.variable} ${poppins.variable} ${inter?.variable} antialiased relative w-screen`}
      >
        <AppProvider>
          <Navbar />
          {children}
          <ContactUs />
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
