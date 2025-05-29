
import { motion } from "framer-motion";
export default function ContactUs() {
  return (
    <footer
    id="contact"
      className="relative  text-white overflow-hidden "
      style={{ fontFamily: '"Patrick Hand", cursive', height: "100vh" }}
    >
      <div className="absolute top-8 left-8 text-lg">Contact:</div>

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg"
        style={{ color: "cadetblue" }}
      >
        Bring your ideas to life and create cool gifts with us.
      </div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-24 left-8 flex items-baseline space-x-2"
      >
        <h1 className="text-6xl md:text-8xl">Let's</h1>
        <h1
          className="text-6xl md:text-8xl underline"
          style={{ color: "cadetblue", textDecorationColor: "cadetblue" }}
        >
          Connect!
        </h1>
      </motion.div>

      <div className="absolute top-50 left-8 space-y-1 text-base">
        <div>drop us ur lineee..</div>
        <a href="mailto:sammycraft@gmail.com" className="hover:underline">
          sammycraft@devs.email
        </a>
      </div>

      <motion.div
      initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-32 left-8 sm:text-[10rem] text-[5rem] leading-none"
        style={{ color: "cadetblue" }}
      >
        @2025
      </motion.div>

      <div className="absolute inset-x-0 bottom-10 text-center text-sm text-gray-300">
        <div>Made by</div>
        <div>love</div>
      </div>

      <motion.div 
      initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute bottom-32 right-8 flex flex-col space-y-2 text-base text-gray-300">
        <a href="#" className="hover:underline">
          instagram
        </a>
        <a href="#" className="hover:underline">
          email
        </a>
        <a href="#" className="hover:underline">
          Twitter
        </a>
        <a href="#" className="hover:underline">
          facebook
        </a>
        
      </motion.div>
    </footer>
  );
}
