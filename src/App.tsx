import "./App.css";
import backgroundImage from "../src/assets/background_image.jpg";
import Navbar from "./components/Navbar";
import Hero1 from "./components/Hero1";
import About from "./components/About";
import FeaturedWorks from "./components/FeaturedWorks";
function App() {
  return (
    <>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Navbar />
        <Hero1 />
        <About />
        <FeaturedWorks />
      </div>
    </>
  );
}

export default App;
