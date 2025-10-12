import Image from "next/image";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import WhyOutsourcingSection from "@/components/WhyOutsourcingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LogoCarouselSection from "@/components/LogoCarouselSection";
import AppFooter from "@/components/Footer";
import ContactFormSection from "@/components/ContactUS";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <DifferentiatorsSection />
      <WhyOutsourcingSection />
      <HowItWorksSection />
      <LogoCarouselSection />
      <ContactFormSection />
      <AppFooter />
    </div>
  );
}
