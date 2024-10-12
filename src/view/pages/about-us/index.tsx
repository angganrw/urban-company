import Image from "next/image";
import { TiThMenu } from "react-icons/ti";

export default function AboutUsView() {
  return (
    <section className="w-full  pt-24 pb-16 md:pt-32 flex flex-col md:flex-row items-center justify-between p-8 bg-white">
      <div className="flex flex-col md:w-1/2 md:pr-8 mb-8 md:mb-0">
        <h2 className="flex items-center text-[#1a79af] text-xl font-bold mb-6">
          <TiThMenu className="mr-2" /> ABOUT US
        </h2>
        <h3 className="text-[30px] sm:text-[40px] md:text-[50px] font-semibold mb-4">
          We're always the best
        </h3>
        <p className="text-gray-700 mb-6">
          A dynamic digital solutions company established in 2024. At Urban
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
        <p className="text-gray-700">
          At Urban Digital, we are passionate about what we do, and we are
          driven by a desire to help our clients succeed. We invite you to join
          us on this exciting journey and discover how we can transform your
          digital strategy into a powerful asset for your business.
        </p>
      </div>
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/img/abaout-icon.webp"
            alt="abaoutusicon"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}
