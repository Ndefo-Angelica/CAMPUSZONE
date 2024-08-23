import React from "react";
import Header from "./Header.tsx";
import HeroSection from "./HeroSection.tsx"
import About from "./About.tsx";
import Services from "./Services.tsx";
import ContactForm from "./ContactForm.tsx";
import Footer from "./Footer.tsx";

const App: React.FC = () => {

  return(
    <>
  <Header/>
  <HeroSection/>
  <About/>
  <Services/>
  <ContactForm/>
  <Footer/>
  </>)
}

export default App;