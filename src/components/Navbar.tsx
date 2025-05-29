import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import {
  FaBars,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";


const Navbar = () => {
  const [isMobileMenu, setIsmobileMenu] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  linkRefs.current = [];

  useEffect(() => {
    console.log("mounted");
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" },
    });

    tl.from(".navbar-logo", { opacity: 0, x: -20 });
    tl.from(".navbar-nav a", { opacity: 0, y: -20, stagger: 0.2 });
    tl.from(".navbar-social div", { opacity: 0, x: 20, stagger: 0.2 });
  }, []);

  return (
    <div
      style={{ fontFamily: "'Bangers', cursive" }}
      className="relative z-10 font-bold max-w-7xl mx-auto top-10 rounded-3xl px-10 flex justify-between text-white border border-white p-5 bg-[#ffffff25] shadow-[0_4px_10px_rgba(255,255,255,0.6)]"
    >
      <div className="navbar-logo">SamyCraft</div>

      <div className="hidden sm:flex navbar-nav gap-6">
        <a className="cursor-pointer  hover:border-b-1">Home</a>
        <a className="cursor-pointer   hover:border-b-1">About</a>
        <a className="cursor-pointer   hover:border-b-1">Service</a>
        <a className="cursor-pointer  hover:border-b-1">Contact</a>
      </div>

      <div className="flex navbar-social gap-4">
        <div>
          <FaInstagram />
        </div>
        <div>
          <FaEnvelope />
        </div>
        <div>
          <FaTwitter />
        </div>
      </div>

      {!isOpen ? (
        <div
          className="sm:hidden block "
          onClick={() => {
            setIsopen(true);
            setIsmobileMenu(true)
          }}
        >
          <FaBars />
        </div>
      ) : (
        <div
          className="sm:hidden block"
          onClick={() => {
            setIsopen(false);
            setIsmobileMenu(false)
          }}
        >
          X
        </div>
      )}

      {isMobileMenu ? (
        <div className="absolute  top-20 flex flex-col gap-2 ">
          <a className="cursor-pointer rounded-xl p-2 w-68 border hover:border-b-1">Home</a>
          <a className="cursor-pointer rounded-xl p-2 w-68  border hover:border-b-1">About</a>
          <a className="cursor-pointer rounded-xl p-2 w-68 border  hover:border-b-1">Service</a>
          <a className="cursor-pointer rounded-xl p-2 w-68 border hover:border-b-1">Contact</a>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
