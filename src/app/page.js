"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import { motion } from "framer-motion";

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-300 via-white to-gray-500">
      <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-xl bg-gradient-to-r from-white to-purple-300 blur-4xl"
        />
      </div>

      <Navbar />
      <Hero scrolled={scrolled} />

      {/* Other Page Content */}
      {/* <Main />
      <Main/> */}
    </div>
  );
}
