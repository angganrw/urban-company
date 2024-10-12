import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#fff] bg-opacity-50 text-black py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start space-y-8 md:space-y-0">
          <div className="w-full md:w-1/3">
            <div className="logo mb-4">
              <Image
                src="/img/logo-navbar.webp"
                alt="logo"
                width={130}
                height={60}
              />
            </div>
            <p className="text-[0.9rem] mb-4">
              Empowering businesses with innovative digital solutions tailored
              to meet the demands of the modern world. Our mission is to drive
              your success through technology and creativity.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <FaFacebook className="text-[1.5rem] hover:text-blue-600" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <FaInstagramSquare className="text-[1.5rem] hover:text-pink-500" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-[1.5rem] hover:text-blue-700" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <FaTwitterSquare className="text-[1.5rem] hover:text-blue-400" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-[1.1rem] mb-4">Contact</h3>
            <p className="text-[0.9rem]">666 PIK City</p>
            <p className="text-[0.9rem]">South PIK2, INA</p>
            <p className="text-[0.9rem]">Email: info@urbandigital.com</p>
            <p className="text-[0.9rem]">Phone: +62 1234 56 7 89</p>
            <Link
              href="#"
              className="text-red-900 hover:text-[#1a79af] mt-2 text-bold"
            >
              View Map →
            </Link>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="font-semibold text-[1.1rem] mb-4">Links</h3>
            <ul className="space-y-2 text-[0.9rem]">
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
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-400 pt-4 mt-8 text-center text-sm">
          &copy; 2024 URBAN DIGITAL. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
