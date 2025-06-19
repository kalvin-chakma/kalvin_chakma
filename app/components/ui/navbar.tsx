"use client";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { IoMdHome, IoLogoGithub } from "react-icons/io";
import useThemeStore from "@/app/store/useThemeStore";
import useOutsideClick from "@/app/hooks/useOutsideClick";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useThemeStore();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 30);
  });

  return (
    <motion.div
      className="sticky top-0 z-50 flex items-center justify-center max-w-xs mx-auto h-[7vh] mt- rounded-3xl transition-shadow overflow-hidden border border-gray-500/75 bg-white dark:bg-black"
      animate={{
        boxShadow: scrolled
          ? "0 4px 12px rgba(0, 0, 0, 0.3) "
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
            className="flex gap-2 items-center hover:opacity-80 transition-opacity"
          >
            <IoMdHome className={`${scrolled ? "w-6 h-6" : "w-4 h-4"}`} />
            <span className={`${scrolled ? "hidden" : "inline"}`}>Home</span>
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <a
            href="https://github.com/kalvin-chakma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center hover:opacity-80 transition-opacity"
          >
            <IoLogoGithub className={`${scrolled ? "w-6 h-6" : "w-4 h-4"}`} />
            <span className={`${scrolled ? "hidden" : "inline"}`}>Github</span>
          </a>
        </div>
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={toggleTheme}
        >
          <div>
            {darkMode ? (
              <BsLightbulbOffFill
                className={`${scrolled ? "w-6 h-6" : "w-4 h-4"}`}
              />
            ) : (
              <BsLightbulbFill
                className={`${scrolled ? "w-6 h-6" : "w-4 h-4"}`}
              />
            )}
          </div>
          <span className={`${scrolled ? "hidden" : "inline"}`}>Theme</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
