import Image from "next/image";
import { TiThMenu } from "react-icons/ti";

export default function AboutUsView() {
  return (
    <section className="w-full h-[100vh] flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="flex flex-col md:w-1/2 md:pr-8">
        <h2 className="flex items-center text-[#1a79af] text-xl font-bold mb-6">
          <TiThMenu className="mr-2" /> ABOUT US
        </h2>
        <h3 className="text-[50px] font-semibold mb-2">We're always to best</h3>
        <p className="text-gray-700 mb-6">
          a dynamic digital solutions company established in 2024. At Urban
          Digital, we are committed to driving innovation and delivering
          high-quality digital services to help businesses thrive in the
          ever-evolving digital landscape.
        </p>
        <p className="text-gray-700 mb-6">
          Our team comprises skilled professionals from diverse backgrounds,
          each bringing a unique perspective and expertise to the table. We
          believe that collaboration is key to success, and our dedicated teams
          work seamlessly together to provide tailored solutions that meet our
          clients' specific needs.
        </p>
        <p className="text-gray-700 mb-6">
          From digital marketing and web development to graphic design and IT
          consulting, Urban Digital offers a comprehensive range of services
          designed to enhance your brand's online presence and drive engagement.
          We take pride in our ability to adapt to the latest trends and
          technologies, ensuring that our clients receive cutting-edge solutions
          that propel them forward.
        </p>
        <p className="text-gray-700 mb-6">
          At Urban Digital, we are passionate about what we do, and we are
          driven by a desire to help our clients succeed. We invite you to join
          us on this exciting journey and discover how we can transform your
          digital strategy into a powerful asset for your business.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-4">
        <div className="relative mb-4 md:mb-0 w-[700px] h-[700px]">
          <Image
            src="/img/abaout-icon.svg"
            alt="abaouticon"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
