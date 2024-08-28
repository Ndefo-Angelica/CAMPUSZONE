import React from "react";
import HeroSection from "./HeroSection.tsx"
import About from "./About.tsx";
import OurServices from "./OurServices.tsx";
import ContactForm from "./ContactForm.tsx";
import Footer from "./Footer.tsx";

const Home: React.FC = () => {

  return (
    <div className="border-solid border-[2px] border-pink-200">
      <HeroSection />
      <About />
      <OurServices />
      <ContactForm />
      <Footer />
      
    </div>)
}

export default Home;