"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const carouselImages = [
  "./Hero1.jpg",
  "./Hero3.jpg",
  "./Hero4.jpg",
  "./Hero2.jpg",

];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${carouselImages[currentIndex]}')`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Semi-transparent overlay for text contrast - OPTIONAL */}
      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="text-white max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          {/* Heading with MULTIPLE text shadows for maximum visibility */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              textShadow: `
                /* Multiple layered shadows for guaranteed visibility */
                0px 2px 4px rgba(0, 0, 0, 0.8),
                0px 4px 8px rgba(0, 0, 0, 0.6),
                0px 8px 16px rgba(0, 0, 0, 0.4),
                2px 2px 0px rgba(0, 0, 0, 0.3)
              `
            }}
          >
            Connecting the world <span
              className="text-primary"
              style={{
                textShadow: `
      0px 0px 6px rgba(255, 255, 255, 0.9),
      0px 0px 10px rgba(255, 255, 255, 0.8),
      2px 2px 4px rgba(0, 0, 0, 0.5)
    `,
              }}
            >
              <br />
              to empower your glowing future.
            </span>

          </motion.h1>

          {/* Description with enhanced visibility */}
          <motion.p
            className="text-lg sm:text-xl mb-8 font-medium"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              color: '#ffffff',
              textShadow: `
                0px 1px 3px rgba(0, 0, 0, 0.9),
                0px 2px 6px rgba(0, 0, 0, 0.7),
                0px 3px 9px rgba(0, 0, 0, 0.5)
              `
            }}
          >
            
          </motion.p>

          {/* Buttons with guaranteed contrast */}
          <motion.div
            className="flex gap-4 flex-wrap"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Primary Button - Solid with shadow */}
            <motion.a
              href="/jobs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white text-[#2C5A5B] rounded-lg font-semibold 
                         hover:bg-gray-100 transition-all duration-300 
                         shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)]"
            >
              Join Our Team
            </motion.a>

            {/* Secondary Button - Enhanced visibility */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                         shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)]
                         bg-white/10 backdrop-blur-sm border-2 border-white/40 
                         hover:bg-white/20 hover:border-white/60"
              style={{
                textShadow: '0px 1px 3px rgba(0, 0, 0, 0.5)'
              }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel Indicators - Enhanced visibility */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${index === currentIndex
              ? "bg-white scale-125 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              : "bg-white/80 hover:bg-white shadow-[0_0_4px_rgba(255,255,255,0.5)]"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Next/Previous Buttons - Enhanced visibility */}
    </section>
  );
}