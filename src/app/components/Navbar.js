"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaCrown } from "react-icons/fa";

const navigation = [
  { name: "Features", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Changelog", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // for tracking window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-2 z-50 flex justify-center items-center px-2"
    >
      <motion.nav
      //animation for different different srceen sizes
        animate={{
          width: scrolled
            ? windowWidth <= 900
              ? "100%"
              : windowWidth <= 1100
              ? "80%"
              : "60%"
            : "100%",

          borderRadius: scrolled ? "15px" : "0px",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "",
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        className={`max-w-7xl flex items-center justify-between px-6 py-[6px] ${
          scrolled || windowWidth < 900 ? "bg-white" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            className="h-10 w-auto"
            src="https://framerusercontent.com/images/on7xUpJ1SM94eAeiyf04v5F4rjQ.png"
            alt="Logo"
          />
        </div>

        {/*For Desktop Menu */}
        <div className="hidden lg:flex gap-2">
          {navigation.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.5 }}
              className="font-semibold text-gray-800 text-sm py-1 px-4 rounded-xl hover:bg-gray-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="hidden lg:flex"
          >
            <button
              style={{
                background:
                  "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
              }}
              className="flex items-center gap-2 text-white px-4 py-2 rounded-lg shadow-md"
            >
              <FaCrown className="text-white" size={20} />
              Get Template
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8 md:h-10 md:w-10 text-gray-900" />
            ) : (
              <Bars3Icon className="w-8 h-8 md:h-10 md:w-10 text-gray-900" />
            )}
          </button>
        </div>
      </motion.nav>

      {/*for  Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 inset-x-0 bg-white shadow-lg p-6 flex flex-col gap-4 lg:hidden"
          >
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-900 font-semibold hover:text-purple-600"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
