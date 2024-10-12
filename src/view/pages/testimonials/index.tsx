import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import ContentfulClient from "@/Contentful/contentfulClient";
import {
  TypeTestimonialsSkeleton,
  ITestiAsset,
} from "@/Contentful/testinomi.types";

const getTestimonialsContentful = async () => {
  try {
    const data = await ContentfulClient.getEntries<TypeTestimonialsSkeleton>({
      content_type: "testimonials",
    });
    return data.items;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default async function TestimonialView() {
  const testimonials = await getTestimonialsContentful();
  console.log(testimonials);
  return (
    <section className="w-full flex flex-col items-center pt-24 pb-16 bg-white px-4 md:px-8">
      <div className="mb-8 text-center">
        <h2 className="flex items-center justify-center text-[#1a79af] text-lg md:text-xl font-bold mb-4">
          <TiThMenu className="mr-2" /> Client’s Testimonials
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-[50px] font-semibold mb-12">
          What people say about our company
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-7xl">
        {testimonials.map((testimonials, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-start mb-4">
              {testimonials.fields?.imgUrl && (
                <Image
                  src={`https:${
                    (testimonials.fields.imgUrl as ITestiAsset).fields.file.url
                  }`}
                  alt={testimonials.fields.name}
                  width={100}
                  height={100}
                  className="rounded-lg mr-4 w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
                />
              )}
              <div className="mt-2">
                <h3 className="text-lg font-semibold">
                  {testimonials.fields?.name}
                </h3>
                <p className="text-gray-600">{testimonials.fields?.jobs}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 hover:text-[#1a79af]">
                {testimonials.fields?.text}
              </p>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={`h-5 w-5 ${
                    index < (testimonials.fields?.rating ?? 0)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
