import Hero from "@/components/sections/Hero";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PackagesPreview from "@/components/sections/PackagesPreview";
import WhyUs from "@/components/sections/WhyUs";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeHelp />
      <ServicesPreview />
      <PackagesPreview />
      <WhyUs />
      <PortfolioPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
