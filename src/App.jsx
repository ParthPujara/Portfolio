import { useEffect } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import NavigationBar from "./components/NavigationBar";
import SkillsSection from "./components/SkillsSection";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div className="z-[-1] bg-gradient-to-r blur-[120px] from-[#000000] to-[#ffffff] absolute w-[200px] h-[200px] top-0 right-0"></div>
      <div className="z-[-1] bg-gradient-to-l blur-[120px] from-[#000000] to-[#ffffff] absolute w-[200px] h-[200px] bottom-0 left-0"></div>
      <NavigationBar />
      <div className="px-10 md:ps-12 lg:ps-20">
        <MainSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div>
        <ContactSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
