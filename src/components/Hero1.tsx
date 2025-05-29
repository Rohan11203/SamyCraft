import Image5 from "../assets/Image5.jpg";
import Image2 from "../assets/Image22.jpg";
import spiderImage from "../assets/spider_image.gif";
import { motion } from "framer-motion";
const Hero1 = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-white px-4">
      <div className="relative z-30 flex flex-col items-center gap-6 max-w-xl text-center">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-6xl md:text-9xl  rubik-doodle-shadow-regular "
        >
          CREATIVE
        </motion.h1>
        <p className="text-sm sm:text-xl">
          Bring Your Memories to Life—One Sketch at a Time
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform">
          Explore
        </button>
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-5xl md:text-9xl rubik-doodle-shadow-regular"
        >
          COLLECTIVE
        </motion.h1>
      </div>

      <img src={spiderImage} className="absolute  top-10 right-0 z-10 sm:block hidden" />
      <motion.img
        src={Image2}
        alt=""
        initial={{ x: -100, opacity: 0, rotate: -12 }}
        animate={{ x: 0, opacity: 1, rotate: -12 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-45 left-30 w-48 rounded-xl shadow-lg"
        style={{ transform: "rotate(-12deg)", filter: "brightness(75%)" }}
      />

      <motion.img
        initial={{ x: -100, opacity: 0, rotate: 8 }}
        animate={{ x: 0, opacity: 1, rotate: 8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={Image5}
        alt=""
        className="absolute bottom-50 left-55 w-48 rounded-xl shadow-lg"
        style={{ transform: "rotate(8deg)", filter: "brightness(75%)" }}
      />
      <motion.img
       initial={{ x: 100, opacity: 0, rotate: 18 }}
        animate={{ x: 0, opacity: 1, rotate: 18 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={Image2}
        alt=""
        className="absolute top-45 right-20 w-48 rounded-xl shadow-lg"
        style={{ transform: "rotate(18deg)", filter: "brightness(75%)" }}
      />

      <motion.img
        initial={{ x: 100, opacity: 0, rotate: -8 }}
        animate={{ x: 0, opacity: 1, rotate: -8 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={Image5}
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
