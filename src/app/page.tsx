import Footer from "@/view/components/Footer";
import AboutUsView from "@/view/pages/about-us";
import HomeView from "@/view/pages/home";
import OurTeamsView from "@/view/pages/our-teams";
import ServiceView from "@/view/pages/services";
import TestimonialView from "@/view/pages/testimonials";

export default function AppHome() {
  return (
    <div>
      <HomeView />
      <AboutUsView />
      <ServiceView />
      <OurTeamsView />
      <TestimonialView />
      <Footer />
    </div>
  );
}
