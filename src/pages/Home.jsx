import { useLocation } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import { useEffect } from "react";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="">
      <HeroSection id="home" />
      {/* <Hero id="home"/> */}
      <HowItWorks />
      {/* <Pricing /> */}
      <Features />
      <Testimonials />
      <About id="about" />
      {/* <Contact id="contact"/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
