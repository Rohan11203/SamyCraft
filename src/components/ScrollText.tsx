import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ScrollText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const sentence = "CREATIVE CRAFTS ✦ MEMORABLE ART ✦ ONE SKETCH AT A TIME ✦ ";

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;

    const textWidth = innerRef.current.offsetWidth;

    gsap.set(containerRef.current, { x: 0 });
    gsap.to(containerRef.current, {
      x: -textWidth,
      ease: "none",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#f4f1ec]">
      <div ref={containerRef} className="flex  whitespace-nowrap">
        <div
          style={{ fontFamily: "Bebas Neue,sans-serif" }}
          ref={innerRef}
          className="inline-block  sm:text-[10vh] text-6xl whitespace-nowrap  text-gray-900 font-semibold"
        >
          {sentence}
        </div>
        <div
          style={{ fontFamily: "Bebas Neue,sans-serif" }}
          className="inline-block sm:text-[10vh] text-6xl  text-gray-900 font-semibold"
        >
          {sentence}
        </div>
      </div>
    </div>
  );
}
