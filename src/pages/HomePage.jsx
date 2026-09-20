import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HiringProcess from "../components/HiringProcess";
import About from "../components/About";
import ClientBenefit from "../components/ClientBenefit";

export default function HomePage({ scrollToSection }) {
  return (
    <div className="home-page-content">
      <Hero scrollToSection={scrollToSection} />
      <Services />
      <HiringProcess />
      <About />
      <ClientBenefit />
    </div>
  );
}
