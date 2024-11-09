"use client";

import HeroSection from "./components/Hero/Hero";
import AboutSection from "./components/About/About";
import ProjectSection from "./components/Projects/Project";
import Footer from "./components/Footer/footer";

export default function Home (){
  return( <div>
  
  <HeroSection></HeroSection>
  <AboutSection></AboutSection>
  <ProjectSection></ProjectSection>
  <Footer></Footer>
  </div>
  );
}
