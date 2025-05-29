import "./App.css";
import backgroundImage from "../src/assets/background_image.jpg";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import About from "./components/About";
import FeaturedWorks from "./components/FeaturedWorks";
import ScrollText from "./components/ScrollText";
import CoolSection from "./components/CoolSection";
import ContactUs from "./components/ContactUs";
import Lenis from "lenis";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel:true });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <Hero1 />
        <About />
        <ScrollText />
        <CoolSection />
        <FeaturedWorks />
        <ContactUs />
      </div>
    </>
  );
}

export default App;
