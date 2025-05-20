import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import BurgerMenu from "@/components/BurgerMenu";

export default function Home() {
  return (
    <div className="">
      <BurgerMenu/>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}
