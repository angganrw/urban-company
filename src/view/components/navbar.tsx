"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [ifMOpen, setifMOpen] = useState(false);

  const toggleMenu = () => {
    setifMOpen(!ifMOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#fff] bg-opacity-50 py-4 px-8 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Image
            src="/img/logo-navbar.webp"
            alt="logo"
            width={130}
            height={60}
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black cursor-pointer"
            aria-label={ifMOpen ? "Close menu" : "Open menu"}
          >
            {ifMOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav
          className={`md:flex ${
            ifMOpen ? "block" : "hidden"
          } absolute md:static w-full md:w-auto top-16 left-0`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0">
            <li>
              <Link
                href="/"
                className="text-black font-medium hover:text-[#1a79af] cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="text-black font-medium hover:text-[#1a79af] cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-black font-medium hover:text-[#1a79af] cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/our-teams"
                className="text-black font-medium hover:text-[#1a79af] cursor-pointer"
              >
                Our Teams
              </Link>
            </li>
            <li>
              <Link href="/our-teams">
                <button
                  className="border border-[#1a79af] text-black font-semibold py-2 px-4 rounded-full transition duration-300 
  hover:bg-[#1a79af] hover:text-white hover:transform hover:scale-110 hover:rotate-3"
                >
                  Let's Talk
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
