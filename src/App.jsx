import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/About";
import IndustriesPage from "./pages/IndustriesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedEnterpriseLogo from "./components/AnimatedEnterpriseLogo";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Loading animation timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200); // 300ms initial delay + 700ms flip + 200ms padding
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // Monitor scroll positioning on Home page to update Navbar active indicator
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const sections = ["home", "services", "about", "industry"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999
      }}>
        <AnimatedEnterpriseLogo isLoader={true} />
      </div>
    );
  }

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage scrollToSection={scrollToSection} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage scrollToSection={scrollToSection} />} />
        </Routes>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

