export default function HomeView() {
  return (
    <section className="w-full h-[100vh] relative flex flex-col items-center justify-center min-h-screen bg-[url('/img/header-icon.svg')] bg-cover bg-center text-center">
      <div className="absolute inset opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Boundless Innovation,
          <br />
          Exceptional Digital Services
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
          At Urban Digital, we provide top-notch digital solutions driven by our
          dedicated team and vast expertise. We empower brands to thrive in the
          ever-evolving digital landscape.
        </p>
      </div>
    </section>
  );
}
