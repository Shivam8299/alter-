"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function Hero({ scrolled }) {
  return (
    <section className="mt-30 lg:mt-35 relative flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-3xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-10 w-22 md:w-24 lg:w-26 p-3 flex items-center justify-center bg-white rounded-2xl shadow-md"
        >
          <img
            src="https://framerusercontent.com/images/Vw4SxE2qkEuKYpt0YYdU2kV6Irg.png?width=64&height=64"
            alt="Hero Logo"
            className="rounded-lg p-2 bg-black shadow-lg shadow-purple-300"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className=" text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal tracking-tight text-gray-900 "
        >
          Automate. Engage. Convert. <br /> Powered by AI.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-base md:text-lg leading-8 text-gray-600"
        >
          Your journey to AI-powered marketing starts here
        </motion.p>

        {/* Buttons */}.
        <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 flex justify-center gap-4"
      >
        {/* Get Started Button */}
        <a
          href="#"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:from-purple-500 hover:to-indigo-500 transition-all"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </a>

        {/* Learn More Button */}
        <a
          href="#"
           style={{
                background:
                  "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
              }}
          className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow transition-colors"
        >
          <HelpCircle className="w-4 h-4" /> Learn More
        </a>
      </motion.div>
    </AnimatePresence>
        
      </motion.div>
    </section>
  );
}
