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
export const metadata = {
  title: "Cybersecurity Finland | Advancing Europe's Cyber Resilience",
  description:
    "Finland’s most trusted cybersecurity partner providing ISO 27001, NIS2, SOC2 readiness, risk management, cyber research, and compliance solutions.",
  keywords: [
    "Cybersecurity Finland",
    "ISO 27001",
    "NIS2 Compliance",
    "SOC2 Readiness",
    "Cybersecurity Research",
    "Cyber Resilience Europe",
    "Information Security",
    "Cyber Defense",
  ],
  openGraph: {
    title: "Cybersecurity Finland | Cyber Research & Compliance Experts",
    description:
      "Trusted European cybersecurity partner. ISO 27001, NIS2, SOC2, incident management, enterprise security & more.",
    url: "https://cybersecurity-finland-ten.vercel.app/",
    siteName: "Cybersecurity Finland",
    images: [
      {
        url: "/heropic.jpg",
        width: 1200,
        height: 630,
        alt: "Cybersecurity Europe Hero Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Finland",
    description:
      "Leading cybersecurity research & compliance experts in Europe.",
    images: ["/heropic.jpg"],
  },
};
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
