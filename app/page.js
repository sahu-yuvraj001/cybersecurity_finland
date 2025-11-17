import Image from "next/image";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseus";
import GDPRPrinciples from "./components/GDPRPrinciples";
import ComplianceProcess from "./components/ComplianceProcess";
import Testimonials from "./components/Testimonial";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import ResearchSpotlight from "./components/ResearchSpotlight";
import Industries from "./components/Industries";
import Stats from "./components/Stats";
import CaseStudy from "./components/CaseStudy";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <GDPRPrinciples/>
      <ComplianceProcess/>
      <Testimonials/>
      <FAQSection/>
      <FinalCTA/>
      <Industries/>
      <Stats/>
      <CaseStudy/>
      <ResearchSpotlight/>
    </div>
  );
}
