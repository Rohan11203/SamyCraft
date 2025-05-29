import { motion } from "framer-motion";
import samImage from "../assets/samu1.jpg";
const About = () => {
  return (
    <div
      className="min-h-screen relative bg-center py-20 sm:px-20 px-0"
      id="about"
    >
      <div className="container text-white mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl font-black mb-8"
            >
              <span className="text-gray-500">Meet the</span>
              <span className="gradient-text font-caveat block">
                {" "}
                Artist ✨
              </span>
            </motion.h2>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 text-white text-lg  leading-relaxed"
            >
              <p>
                Hey there! 👋 I'm a passionate creator who believes that art has
                the power to capture emotions, tell stories, and create lasting
                memories.
              </p>

              <p>
                From whimsical illustrations that spark joy to heartfelt
                portraits that preserve precious moments, I pour my soul into
                every single piece. Whether it's a custom gift for someone
                special or a personal artwork that speaks to your heart, I'm
                here to bring your vision to life.
              </p>

              <p>
                My style blends modern aesthetics with a touch of dreamy magic
                ✨ Because life's too short for boring art!
              </p>
            </motion.div>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-6 py-3 rounded-full font-semibold">
                🎨 Digital Art
              </span>
              <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-3 rounded-full font-semibold">
                ✏️ Custom Portraits
              </span>
              <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 px-6 py-3 rounded-full font-semibold">
                🎁 Gift Design
              </span>
            </div>
          </div>

          <div className="relative">
            <div className=" rounded-3xl p-8 ">
              <div className=" rounded-2xl flex items-center justify-center">
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }} 
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-64 h-64 overflow-hidden rounded-2xl bg-cover"
                >
                  <img className="w-full h-full object-cover" src={samImage} />
                </motion.div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-gray-400 mb-2">
                  Creating Magic Since 2020
                </p>
                <p className="text-gray-400">500+ Happy Clients Worldwide 🌍</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-300 rounded-full opacity-60 float-animation"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-300 rounded-full opacity-60 float-animation"
              style={{ animationDelay: "2s" }}
            ></div>
            <div 
            style={{ fontFamily: '"Patrick Hand", cursive' }}
            className="absolute  -right-6 w-58 h-28 font-semibold text-[#f5d7bd] text-4xl">Scroll Down!! 👇🏻</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
