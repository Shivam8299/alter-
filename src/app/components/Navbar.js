"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Sparkles } from "lucide-react";

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

  // // Track scrolling
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 150);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);

    handleScroll();

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
      className=" max-w-[1150px] m-auto  fixed inset-x-0 top-3 z-50 flex justify-center items-center px-2 md:px-4 lg:px-14 xl:6 2x:px-2"
    >
      <motion.nav
        //animation for different different srceen sizes
        animate={{
          width: scrolled
            ? windowWidth <= 900
              ? "100%"
              : windowWidth <= 1100
              ? "80%"
              : "65%"
            : "100%",

          borderRadius: scrolled && windowWidth > 900 ? "15px" : "0px",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`max-w-7xl flex items-center justify-between px-5  sm:mx-0  py-[6px] ${
          scrolled || windowWidth < 900
            ? "bg-white rounded-none "
            : " rounded-none"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center items-center gap-[2px]">
        <div className=" w-10 h-10 bg-white flex items-center justify-center rounded-[10px] shadow-md  ">
          <span className="text-white w-8 h-8 text-xl  bg-[#0e1c29]  rounded-[10px] flex items-center justify-center font-semibold">
            qb
          </span>
        </div>
        <p className="text-xl text-gray-800 font-semibold">QuickBid</p>
        </div>
        {/* </div> */}

        {/* <div className="rounded-xl flex items-center justify-center">
          <div className="p-[5px]  rounded-xl bg-white">
            <span className="text-white w-7 h-7  text-2xl mt-[-3px] bg-[#0e1c29] p-4 border border-red-600 rounded-[10px] flex items-center justify-center font-semibold">
            qb
          </span>
          </div>
          <p>QuickBid</p>
        </div> */}

        {/*For Desktop Menu */}
        <div className="hidden lg:flex gap-2">
          {navigation.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.5 }}
              className={`font-medium  text-[#0E1C29] text-[14px] py-1 px-3  rounded-xl hover:bg-gray-400 transition-colors`}
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
              className="flex items-center gap-1 text-white px-3 py-2 rounded-lg shadow-md"
            >
            <Sparkles size={16} />
             <span className="text-sm"> Request Demo</span>
            </button>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <XMarkIcon className="w-8 h-8 md:h-10 md:w-10 text-gray-900 " />
            ) : (
              <Bars3Icon className="w-8 h-8 md:h-10 md:w-10 text-gray-900" />
            )}
          </button>
        </div>
      </motion.nav>

      {/*for  Mobile Menu */}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
      {/*for  Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-13 sm:top-14 inset-x-2 sm:mx-2 bg-white shadow-xl rounded-2xl rounded-t-none p-4 flex flex-col gap-4 lg:hidden z-20"
          >
            {/* Navigation Links */}
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 font-semibold text-base py-2 px-3 rounded-lg  transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="py-2">
              <button
                style={{
                  background:
                    "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
                }}
                className="w-full flex items-center justify-center gap-2 text-white px-4 py-3 rounded-xl shadow-md"
              >
                <Sparkles className="text-white" size={18} />
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
