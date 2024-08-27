import React from "react";
import Header from "./Header.tsx";
import HeroSection from "./HeroSection.tsx"
import About from "./About.tsx";
import Services from "./Services.tsx";
import ContactForm from "./ContactForm.tsx";
import Footer from "./Footer.tsx";
import Copyright from "./Copyright.tsx";

const Home: React.FC = () => {

  return (
    <div className="border-solid border-[2px] border-pink-200">
      <Header />
      <HeroSection />
      <About />
      <Services />
      <ContactForm />
      <Footer />
      <Copyright />
    </div>)
}

export default Home;