"use client";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { IoMdHome, IoLogoGithub } from "react-icons/io";
import useThemeStore from "@/app/store/useThemeStore";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useThemeStore();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <motion.div
      className="sticky top-0 z-50 flex items-center justify-center max-w-xs mx-auto h-[5vh] mt- rounded-md transition-shadow overflow-hidden border border-gray-500/75 bg-white dark:bg-black"
      animate={{
        boxShadow: scrolled
          ? "0 4px 12px rgba(0, 0, 0, 0.1)"
          : "0 0px 0px rgba(0, 0, 0, 0)",
        width: scrolled ? "30%" : "100%",
        y: scrolled ? 5 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex gap-2 w-full justify-around items-center px-2">
        <div className="flex gap-2 items-center">
          <a
          href="/"
           className="flex gap-2 items-center hover:opacity-80 transition-opacity">
                    <IoMdHome />
          <span className={`${scrolled ? "hidden" : "inline"}`}>Home</span>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <a 
            href="https://github.com/kalvin-chakma" 
            className="flex gap-2 items-center hover:opacity-80 transition-opacity"
          >
            <IoLogoGithub />
            <span className={`${scrolled ? "hidden" : "inline"}`}>Github</span>
          </a>
        </div>
        <div 
          className="flex gap-2 items-center cursor-pointer"
          onClick={toggleTheme}
        >
          {darkMode ? <BsLightbulbOffFill /> : <BsLightbulbFill />}
          <span className={`${scrolled ? "hidden" : "inline"}`}>Theme</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
