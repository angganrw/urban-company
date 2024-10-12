import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/view/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "URBAN DIGITAL",
  description:
    "Website Design & Build — We take the time to listen to your vision and transform it into digital reality. From concept to execution, our goal is to create a website or app that not only looks great but also helps you achieve your business objectives.",
  openGraph: {
    title: "URBAN DIGITAL",
    description:
      "Website Design & Build — We take the time to listen to your vision and transform it into digital reality. From concept to execution, our goal is to create a website or app that not only looks great but also helps you achieve your business objectives.",
    images: [
      {
        url: "/img/header-icon-lg.webp",
        width: 800,
        height: 600,
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
