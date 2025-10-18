import Herosection from "../components/Herosection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import WhyOutsourcingSection from "@/components/WhyOutsourcingSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LogoCarouselSection from "@/components/LogoCarouselSection";

import ContactFormSection from "@/components/ContactUS";

export default function Home() {
  return (
    <div>
    
      <Herosection />
      <DifferentiatorsSection />
      <WhyOutsourcingSection />
      <HowItWorksSection />
      <LogoCarouselSection />
      <ContactFormSection />
     
    </div>
  );
}
