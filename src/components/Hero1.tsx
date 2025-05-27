import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image22.jpg";
import spiderImage from "../assets/spider_image.gif";
import { motion } from "framer-motion";
const Hero1 = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white px-4">
      <div className="relative z-30 flex flex-col items-center gap-6 max-w-xl text-center">
        <h1 className="text-7xl md:text-9xl  rubik-doodle-shadow-regular ">
          CREATIVE
        </h1>
        <p className="text-xl">
          Bring Your Memories to Life—One Sketch at a Time
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform">
          Explore
        </button>
        <h1 className="text-7xl md:text-9xl rubik-doodle-shadow-regular">
          COLLECTIVE
        </h1>
      </div>

      <img src={spiderImage} className="absolute top-10 right-0 z-10" />
      <img
        src={Image1}
        alt=""
        className="absolute top-45 left-30 w-44 rounded-xl shadow-lg"
        style={{ transform: "rotate(-12deg)", filter: "brightness(75%)" }}
      />

      <img
        src={Image2}
        alt=""
        className="absolute bottom-50 left-55 w-44 rounded-xl shadow-lg"
        style={{ transform: "rotate(8deg)", filter: "brightness(75%)" }}
      />
      <img
        src={Image1}
        alt=""
        className="absolute top-45 right-20 w-48 rounded-xl shadow-lg"
        style={{ transform: "rotate(18deg)", filter: "brightness(75%)" }}
      />

      <img
        src={Image2}
        alt=""
        className="absolute bottom-45 right-50 w-48 rounded-xl"
        style={{
          transform: "rotate(-8deg)",
          zIndex: 10, 
          filter: "brightness(75%)",
        }}
      />
    </div>
  );
};

export default Hero1;
