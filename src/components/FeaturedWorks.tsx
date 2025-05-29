import { useState } from "react";
import { motion } from "framer-motion";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
const FeaturedWorks = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Dreamy Portrait",
      category: "portraits",
      image: work1,
      description: "Custom digital portrait with ethereal vibes",
    },
    {
      id: 2,
      title: "Cosmic Illustration",
      category: "illustrations",
      image: work2,
      description: "Starry night themed artwork",
    },
    {
      id: 3,
      title: "Anniversary Gift Set",
      category: "gifts",
      image: work3,
      description: "Personalized gift package design",
    },
    {
      id: 4,
      title: "Living Space Art",
      category: "illustrations",
      image: work4,
      description: "Modern interior illustration",
    },
    {
      id: 5,
      title: "Nature Portrait",
      category: "portraits",
      image: work5,
      description: "Outdoor lifestyle portrait",
    },
    {
      id: 6,
      title: "Custom Gift Box",
      category: "gifts",
      image:
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop",
      description: "Bespoke gift packaging",
    },
  ];

  const categories = [
    { id: "all", name: "All Work", emoji: "🎨" },
    { id: "illustrations", name: "Illustrations", emoji: "✨" },
    { id: "portraits", name: "Portraits", emoji: "💖" },
    { id: "gifts", name: "Gifts", emoji: "🎁" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="py-20" id="work">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-black mb-6"
            style={{ fontFamily: '"Patrick Hand", cursive' }}
          >
            <span className="text-white">Featured</span>
            <span className="  underline  text-[cadetblue]"> Works</span>
          </motion.h2>
          <p
            className="text-xl text-gray-100 max-w-2xl mx-auto"
            style={{ fontFamily: '"Patrick Hand", cursive' }}
          >
            Each piece tells a story, crafted with love and attention to detail
          </p>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-yello-500 to-yellow-600 text-white shadow-lg scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-300 shadow-md hover-lift"
              }`}
            >
              {category.emoji} {category.name}
            </button>
          ))}
        </motion.div>

        <div
         
          className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-3xl p-6 hover-lift group-hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-gray-200 mb-2 group-hover:gradient-text transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorks;
