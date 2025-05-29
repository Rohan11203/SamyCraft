import React from "react";
export default function CollectionSection() {
  const items = [
    { name: "Custom Portrait", type: "Illustration", price: "$75" },
    { name: "Anniversary Gift Box", type: "Keepsake", price: "$50" },
    { name: "Digital Sketch", type: "Digital", price: "$30" },
  ];

  return (
    <section className="relative py-20 ">
      <h2
      style={{ fontFamily: '"Patrick Hand", cursive' }}
      className="text-center text-7xl font-bold mb-8 text-[#f5d7bd]">
        Browse Our Creations.
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 text-center mb-4"
       style={{ fontFamily: '"Patrick Hand", cursive' }}
      >
        <div className="text-2xl font-semibold text-[cadetblue]">Product.</div>
        <div className="text-2xl font-semibold text-[cadetblue]">Type.</div>
        <div className="text-2xl font-semibold text-[cadetblue]">Price.</div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-3 text-2xl gap-4 text-center"
       style={{ fontFamily: '"Patrick Hand", cursive' }}
      >
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <div className="py-2 text-[#f5d7bd]" >{item.name}</div>
            <div className="py-2 text-[#f5d7bd]" >{item.type}</div>
            <div className="py-2 font-bold text-[#f5d7bd]" >{item.price}</div>
          </React.Fragment>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-block text-7xl font-bold underline text-white"
           style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Shop Now →
        </a>
      </div>
    </section>
  );
}
