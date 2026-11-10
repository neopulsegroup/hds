import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Hero } from "@/components/sections/Hero";
import { Program } from "@/components/sections/Program";
import { Context } from "@/components/sections/Context";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Diagnosis } from "@/components/sections/Diagnosis";
import { Anonymity } from "@/components/sections/Anonymity";
import { Execution } from "@/components/sections/Execution";
import { Deliverables } from "@/components/sections/Deliverables";
import { Criteria } from "@/components/sections/Criteria";
import { Proposal } from "@/components/sections/Proposal";
import { Audience } from "@/components/sections/Audience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Program />
        <Context />
        <HowItWorks />
        <Diagnosis />
        <Anonymity />
        <Execution />
        <Deliverables />
        <Criteria />
        <Proposal />
        <Audience />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
