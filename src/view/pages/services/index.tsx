import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import ContentfulClient from "@/Contentful/contentfulClient";
import {
  TypeServicesSkeleton,
  IServiceAsset,
} from "@/Contentful/services.types";

const getServicesContentful = async () => {
  try {
    const data = await ContentfulClient.getEntries<TypeServicesSkeleton>({
      content_type: "services",
    });
    return data.items;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default async function ServiceView() {
  const services = await getServicesContentful();
  console.log(services);
  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 bg-white">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="flex items-center text-[#1a79af] text-lg md:text-xl font-bold mb-4 md:mb-6">
          <TiThMenu className="mr-2" /> OUR SERVICES
        </h2>
        <h3 className="text-3xl md:text-[50px] font-semibold mb-8 md:mb-16">
          Our Provided Services
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0 group">
        {services.map((services, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-6 rounded-[25px] shadow-2xl transition-transform transform cursor-pointer hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-white to-white hover:from-[#1a79af] hover:to-[#58c8ef] hover:shadow-[#1a79af] w-full h-auto max-w-[350px] min-h-[400px] md:min-h-[500px]"
          >
            <div className="mb-8">
              <Image
                src={`https:${
                  (services.fields.icon as IServiceAsset).fields.file.url
                }`}
                alt={`${services.fields.title} Icon`}
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-black text-[20px] md:text-[25px] font-bold mb-4 md:mb-6">
              {services.fields.title}
            </h3>
            <p className="text-gray-900 text-sm md:text-base mb-8 md:mb-10 text-center">
              {services.fields.description}
            </p>
            <button className="relative -top-1 -left-1 bg-[#1a79af] py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">
              Lets Talk
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
