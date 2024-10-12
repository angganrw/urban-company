export default function HomeView() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center min-h-screen bg-home-icon-sm sm:bg-home-icon-md lg:bg-home-icon-lg xl:bg-home-icon-xl bg-cover bg-center text-center">
      <div className="absolute inset opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Boundless Innovation,
          <br />
          Exceptional Digital Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-xl sm:max-w-2xl lg:max-w-4xl">
          At Urban Digital, we provide top-notch digital solutions driven by our
          dedicated team and vast expertise. We empower brands to thrive in the
          ever-evolving digital landscape.
        </p>
      </div>
    </section>
  );
}
