import Image from "next/image";
import { TiThMenu } from "react-icons/ti";

const UrbanService = [
  {
    id: 1,
    title: "Web development",
    description:
      "Unlock Your Online Potential with Our Expert Web Development Services!. Transform your ideas into reality with our cutting-edge web development solutions. We create robust, scalable, and secure websites tailored to meet your business needs. Lets build your digital presence together!",
    iconUrl: "/img/webdev-icon.svg",
  },
  {
    id: 2,
    title: "Web design",
    description:
      "Elevate Your Brand with Stunning Web Design!. Capture your audience’s attention with our visually appealing and user-friendly designs. Our talented designers craft websites that not only look great but also provide an exceptional user experience. Make your mark in the digital world!",
    iconUrl: "/img/webdesign-icon.svg",
  },
  {
    id: 3,
    title: "Mobile apps",
    description:
      "Revolutionize Your Business with Custom Mobile Apps.! Bring your business to your customers' fingertips with our innovative mobile app development services. Whether it’s iOS or Android, we create high-performance, user-friendly apps that enhance engagement and drive growth. Let’s develop your app today!",
    iconUrl: "/img/mobileapp-icon.svg",
  },
];

export default function ServiceView() {
  return (
    <section className="w-full h-[100vh] flex flex-col md:flex-row items-center justify-center pt-[10rem] bg-white">
      <div className="flex flex-col items-center mb-8">
        <h2 className="flex items-center text-[#1a79af] text-xl font-bold mb-6">
          <TiThMenu className="mr-2" /> OUR SERVICES
        </h2>
        <h3 className="text-[50px] font-semibold mb-20">
          Our Provided Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 group">
          {UrbanService.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center justify-center p-6 rounded-[25px] shadow-2xl transition-transform transform cursor-pointer hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-white hover:from-[#1a79af] hover:to-[#58c8ef] hover:shadow-[#1a79af] w-full md:w-[350px] h-[620px] min-h-[350px] max-h-[620px]"
            >
              <div className="mb-12 ">
                <Image
                  src={service.iconUrl}
                  alt={`${service.title} Icon`}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-black text-[25px] font-bold mb-9">
                {service.title}
              </h3>
              <p className="text-gray-900 mb-20">{service.description}</p>
              <button className="relative -top-1 -left-1 bg-[#1a79af] py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
                Lets Talk
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
