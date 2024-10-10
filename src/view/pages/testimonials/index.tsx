import Image from "next/image";
import { TiThMenu } from "react-icons/ti";
import { FaStar } from "react-icons/fa";

const UrbanTestimoni = [
  {
    id: 1,
    name: "Mbak Mega",
    jobs: "Create Project Web development",
    text: "The web development team exceeded my expectations! They transformed my ideas into a stunning and functional website, ensuring every detail was perfect. Highly recommend their services!",
    imgURL: "/img/testinomi-satu.svg",
    rating: 5,
  },
  {
    id: 2,
    name: "Mbak Wati",
    jobs: "Fix Deploy To Hosting",
    text: "I had issues deploying my project, but the team quickly resolved everything. Their expertise in hosting made the process seamless and stress-free. I'm very satisfied with the outcome!",
    imgURL: "/img/testinomi-dua.svg",
    rating: 4,
  },
  {
    id: 3,
    name: "Mas Wowo",
    jobs: "Costum mobile apps",
    text: "The custom mobile app developed by this team has been a game changer for my business. They understood my vision perfectly and delivered an intuitive and user-friendly app. Absolutely thrilled with the result!",
    imgURL: "/img/testinomi-tiga.svg",
    rating: 4,
  },
  {
    id: 4,
    name: "Mas Ganjar",
    jobs: "Create Project web design",
    text: "The design team brought my vision to life with their creative flair and attention to detail. The new web design has truly elevated my brand's online presence. Thank you for your exceptional work!",
    imgURL: "/img/testinomi-empat.svg",
    rating: 5,
  },
];

export default function TestimonialView() {
  return (
    <section className="w-full h-[100vh] flex flex-col items-center pt-[7rem] bg-white">
      <div className="mb-8 text-center">
        <h2 className="flex items-center text-[#1a79af] text-xl justify-center font-bold mb-6">
          <TiThMenu className="mr-2" /> Client’s Testimonials
        </h2>
        <h3 className="text-[50px] font-semibold mb-20">
          What people say about our company
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {UrbanTestimoni.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-start mb-4">
              <Image
                src={testimonial.imgURL}
                alt="icontesti"
                width={250}
                height={250}
                className="rounded-lg mr-4"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.jobs}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 hover:text-[#1a79af]">
                {testimonial.text}
              </p>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={`h-5 w-5 ${
                    index < Math.floor(testimonial.rating)
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
