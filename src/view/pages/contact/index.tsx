"use client";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";

export default function ContactModal() {
  const [formData, setFormData] = useState({
    conName: "",
    conLName: "",
    conEmail: "",
    conPhone: "",
    conService: "",
    conMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="w-full h-auto flex flex-col items-center  pt-24 pb-16 md:pt-32 bg-white px-4 md:px-0">
      <div className="flex flex-col items-center mb-8 text-center">
        <h2 className="flex items-center text-[#1a79af] text-lg md:text-xl font-bold mb-4">
          <TiThMenu className="mr-2" /> CONTACT US
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <p>
                Contact us today and discover how Urban Digital can turn your
                vision into reality. Let's work together to elevate your digital
                strategy and drive meaningful results for your business. We're
                excited to embark on this journey with you!
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  name="conName"
                  placeholder="Enter your first name"
                  value={formData.conName}
                  onChange={handleChange}
                  className="w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a79af] focus:border-transparent"
                />
                <input
                  type="text"
                  name="conLName"
                  placeholder="Enter your last name"
                  value={formData.conLName}
                  onChange={handleChange}
                  className="w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a79af] focus:border-transparent"
                />
              </div>
              <div className="flex space-x-4">
                <input
                  type="email"
                  name="conEmail"
                  placeholder="Enter your email"
                  value={formData.conEmail}
                  onChange={handleChange}
                  className="w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a79af] focus:border-transparent"
                />
                <input
                  type="tel"
                  name="conPhone"
                  placeholder="Enter your phone"
                  value={formData.conPhone}
                  onChange={handleChange}
                  className="w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a79af] focus:border-transparent"
                />
              </div>
              <select
                name="conService"
                value={formData.conService}
                onChange={handleChange}
                className="w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a79af] focus:border-transparent"
              >
                <option value="" disabled>
                  Select Services
                </option>
                <option value="fivem-dev">Web development</option>
                <option value="web-dev">Web design</option>
                <option value="bug-fivem">Mobile apps</option>
              </select>
              <textarea
                name="conMessage"
                placeholder="Enter your message"
                value={formData.conMessage}
                onChange={handleChange}
                className="w-full p-3 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1a79af] focus:border-transparent"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1a79af] p-3 rounded-md text-white hover:bg-[#165d85] focus:outline-none focus:ring-2 focus:ring-[#1a79af]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
