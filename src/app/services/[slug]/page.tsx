import { notFound } from "next/navigation";
import ContentfulClient from "@/Contentful/contentfulClient";
import { GrSend } from "react-icons/gr";
import {
  TypeServicesSkeleton,
  IServiceAsset,
} from "@/Contentful/services.types";
import Image from "next/image";

async function getServiceData(slug: string) {
  const data = await ContentfulClient.getEntries<TypeServicesSkeleton>({
    content_type: "services",
    "fields.slug": slug,
  });

  if (!data.items.length) {
    return null;
  }
  return data.items[0];
}

export default async function ServiceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const service = await getServiceData(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="w-full flex flex-col items-center justify-center pt-24 pb-16 md:pt-32 bg-white">
      <div className="flex flex-col items-center mb-12 text-center">
        <h3 className="text-3xl md:text-[50px] font-semibold mb-8 md:mb-16">
          Our Provided Services
        </h3>
      </div>

      <div className="grid grid-cols-1 justify-center items-center px-4 sm:px-0 group">
        <div className="flex flex-col items-center justify-center p-6 rounded-[50px] shadow-2xl transition-transform transform cursor-pointer hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br hover:shadow-[#1a79af] w-full h-auto max-w-[550px] min-h-[500px] md:min-h-[500px] mx-auto">
          <div className="mb-8">
            <Image
              src={`https:${
                (service.fields.icon as IServiceAsset).fields.file.url
              }`}
              alt={`${service.fields.title} Icon`}
              width={50}
              height={50}
            />
          </div>
          <h3 className="text-black text-[20px] md:text-[25px] font-bold mb-4 md:mb-6">
            {service.fields.title}
          </h3>
          <p className="text-gray-800 text-sm md:text-base mb-8 md:mb-10 text-center">
            {service.fields.description}
          </p>
          <button className="relative flex items-center border-2 border-[#1a79af] bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-[#1a79af] before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100">
            Let's Start
            <GrSend className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
