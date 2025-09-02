"use client";
import { motion } from "framer-motion";
import cloud from "../../../public/cloud.png";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function HeroSection() {
  return (
    <div className="relative min-h-[100vh] bg-gray-200 overflow-hidden mt-16 lg:mt-0 pt-12 lg:py-0 ">
      {/* Sunlight Rays Background */}
      <div className="absolute inset-0 opacity-30 backdrop-blur-sm ">
        {/* <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        > */}
        <svg
          className="absolute -top-40 -left-40   w-[200%] lg:w-[100%] h-[100%]"
          viewBox="0 0 1200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ray1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8"  />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="ray2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ray3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ray3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ray3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ray3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Main sunlight rays */}
          <path
            d="M0 0 L600 310 L580 320 L0 20 Z"
            fill="url(#ray1)"
            className="animate-pulse"
            style={{ animationDuration: "4s" }}
          />
          <path
            d="M0 20 L620 360 L600 360 L0 40 Z"
            fill="url(#ray2)"
            className="animate-pulse"
            style={{ animationDuration: "5s", animationDelay: "1s" }}
          />
          <path
            d="M0 40 L640 380 L620 400 L0 60 Z"
            fill="url(#ray3)"
            className="animate-pulse"
            style={{ animationDuration: "6s", animationDelay: "2s" }}
          />
          <path
            d="M0 60 L580 360 L560 380 L0 80 Z"
            fill="url(#ray2)"
            className="animate-pulse"
            style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}
          />
          <path
            d="M0 80 L600 400 L580 420 L0 100 Z"
            fill="url(#ray1)"
            className="animate-pulse"
            style={{ animationDuration: "5.5s", animationDelay: "1.5s" }}
          />

          {/* Additional subtle rays */}
          <path
            d="M0 100 L560 380 L540 400 L0 120 Z"
            fill="url(#ray3)"
            className="animate-pulse"
            style={{ animationDuration: "7s", animationDelay: "0.8s" }}
          />
          <path
            d="M0 120 L590 420 L570 440 L0 140 Z"
            fill="url(#ray2)"
            className="animate-pulse"
            style={{ animationDuration: "4.8s", animationDelay: "2.2s" }}
          />
          <path
            d="M0 140 L590 440 L570 440 L0 140 Z"
            fill="url(#ray2)"
            className="animate-pulse"
            style={{ animationDuration: "4.8s", animationDelay: "2.2s" }}
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[20%] px-4 pt-24">
        {/* Backgound Image */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={cloud}
            alt=""
            className="opacity-50 filter brightness-0 invert"
            height={400}
            width={850}
          />
        </motion.div>
        <div className="flex flex-col items-center absolute">
          {/* Central Icon */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
            data-framer-name="Logo"
          >
            <div className="relative" data-framer-name="Container">
              <div className="relative w-24   h-23" data-framer-name="Icon">
                <div
                  className="absolute inset-0  rounded-xl"
                  style={{
                    backgroundColor: "#f6fbff",
                    boxShadow:
                      "inset 0 -2px 0 3px #8dc2eb40, 0 .7065919983928324px .7065919983928324px -.5833333333333333px #10314d36, 0 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px #10314d33, 0 3.6217592146567767px 3.6217592146567767px -1.75px #10314d33, 0 6.8655999097303715px 6.8655999097303715px -2.333333333333333px #10314d2e, 0 13.646761411524492px 13.646761411524492px -2.916666666666667px #f6fbff, 0 30px 30px -3.5px #f6fbff",
                  }}
                >
                  <div className="w-full h-full  rounded-xl flex items-center justify-center">
                    <span className="text-white text-4xl mt-[-3px] bg-[#0e1c29] h-17 w-18 rounded-[12px] flex items-center justify-center font-bold">
                      qb
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col items-center">
            {/* Main Heading */}

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className={`${plusJakarta.className} max-w-5xl text-[40px] lg:text-[72px]  text-[#16101e] text-center mb-3 leading-tight px-6 py-3`}
            >
              Automate. Engage. Convert.
            
              Powered by AI.
            </motion.h1>

            {/* Sub-heading */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-700 text-center mb-6 max-w-2xl"
            >
              Your journey to AI-powered marketing starts here
            </motion.p>

            {/* Call-to-Action Buttons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-row gap-4 items-center"
            >
              {/* Get Started Button */}
              <motion.button
                className="flex items-center space-x-2 text-white text-[15px] px-8 py-3 rounded-xl transition-colors duration-200  text-base"
                style={{
                  background:
                    "linear-gradient(125deg, rgb(119, 75, 229) -4%, rgb(119, 75, 229) 100%)",
                  borderRadius: "10px",
                  boxShadow:
                    "rgb(192, 176, 232) 0px 1px 2px 0px inset, rgba(99, 69, 173, 0.35) 0px 0.706592px 0.706592px -0.583333px, rgba(99, 69, 173, 0.34) 0px 1.80656px 1.80656px -1.16667px, rgba(99, 69, 173, 0.33) 0px 3.62176px 3.62176px -1.75px, rgba(99, 69, 173, 0.3) 0px 6.8656px 6.8656px -2.33333px, rgba(99, 69, 173, 0.26) 0px 13.6468px 13.6468px -2.91667px, rgba(99, 69, 173, 0.15) 0px 30px 30px -3.5px",
                  opacity: 1,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  style={{
                    userSelect: "none",
                    width: "16px",
                    height: "16px",
                    display: "inline-block",
                    fill: "rgb(255, 255, 255)",
                    color: "rgb(255, 255, 255)",
                    flexShrink: 0,
                  }}
                >
                  <g color="rgb(255, 255, 255)">
                    <path d="M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </g>
                </svg>
              </motion.button>

              {/* Learn More Button */}
              <motion.button
                className="flex items-center space-x-2 text-white text-[15px] px-8 py-3 rounded-xl transition-colors duration-200  text-base"
                style={{
                  background:
                    "linear-gradient(127deg, rgb(14, 28, 41) -68%, rgb(50, 61, 104) 100%)",
                  borderRadius: "10px",
                  boxShadow:
                    "rgb(184, 193, 230) 0px 1px 2px 0px inset, rgba(46, 64, 128, 0.35) 0px 0.706592px 0.706592px -0.583333px, rgba(46, 64, 128, 0.34) 0px 1.80656px 1.80656px -1.16667px, rgba(46, 64, 128, 0.33) 0px 3.62176px 3.62176px -1.75px, rgba(46, 64, 128, 0.3) 0px 6.8656px 6.8656px -2.33333px, rgba(46, 64, 128, 0.26) 0px 13.6468px 13.6468px -2.91667px, rgba(46, 64, 128, 0.15) 0px 30px 30px -3.5px",
                  transform: "none",
                  transformOrigin: "50% 50% 0px",
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
