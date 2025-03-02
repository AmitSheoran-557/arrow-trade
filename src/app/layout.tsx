import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MARKET_DATA_LIST } from "../utils/helper";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arrow Trade",
  description: "Unlock Knowledge with Our Featured Articles",
  openGraph: {
    title: "Arrow Trade",
    description: "Unlock Knowledge with Our Featured Articles",
    images: [
      {
        url: "/meta-image.png",
        width: 800,
        height: 600,
        alt: "Arrow Trade Branding Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arrow Trade",
    description: "Unlock Knowledge with Our Featured Articles",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-lightSkyBlue`}>
        <div className="bg-lightSkyBlue lg:py-4 md:py-3 py-2 flex items-center overflow-hidden max-w-[1920px] mx-auto">
          <div className="scrolling-content flex mx-auto">
            {MARKET_DATA_LIST.map((market, index) => (
              <div key={index} className="flex items-center mr-8">
                <span className="lg:mr-1.5 mr-1 lg:text-base text-sm">{market.name}</span>
                <div className="flex items-center whitespace-nowrap bg-lightBrown text-white rounded-[73px] lg:px-4 px-3 lg:py-2 py-1">
                  <span className="lg:text-base text-sm">{market.value}</span>
                  <div className={`ml-2 w-3 h-3 rounded-full ${market.isUp ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
