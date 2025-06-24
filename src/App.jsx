import Certificate from "./components/Certificate";
import { Contact } from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portofolio />
      <Education />
      <Certificate />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
