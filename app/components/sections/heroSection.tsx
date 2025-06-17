import Image from "next/image";
import React from "react";
import { FaPhoneSquareAlt, FaGithubSquare, FaMailBulk } from "react-icons/fa";

const skills = [
  "C/C++",
  "JavaScript",
  "Node.js",
  "React",
  "Express",
  "Next.js",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "framer motion",
];

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto p-2 ">
      {/* Header */}
      <div className="mb-8 text-center">
        {/* <Image
          src="/kalvin-chakma.jpg"
          alt="Kalvin Chakma"
          width={100}
          height={100}
          className="rounded-full shadow-lg object-cover mx-auto"
        /> */}
        <h1 className="text-3xl font-bold dark:text-gray-100 mt-4">
          Kalvin Chakma
        </h1>
        <div className="flex flex-wrap items-center text-xs justify-center gap-4 darK:text-gray-400 mt-2">
          <span className="flex items-center gap-1 dark:hover:text-gray-100">
            <FaPhoneSquareAlt />
            +880 1533-023730
          </span>

          <span className="flex items-center gap-1 dark:hover:text-gray-100">
            <FaMailBulk />
            kalvinchakma7@gmail.com
          </span>

          <a
            href="https://github.com/kalvin-chakma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center text-blue-500 hover:underline"
          >
            <FaGithubSquare />
            github.com/kalvin-chakma
          </a>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold dark:text-gray-300 border-b dark:border-gray-700 pb-1 mb-2">
          EDUCATION
        </h2>
        <div className="flex justify-between">
          <div className="flex gap-2 ">
            <img
              src="/aust_logo.svg"
              alt="My Icon"
              width={30}
              height={30}
              className="mt-1"
            />
            <div className="flex flex-col ">
              <h3 className="font-bold dark:text-gray-400">
                Ahsanullah University of Science and Technology
              </h3>
              <p className="italic dark:text-gray-400/70 text-xs font-medium">
                Bachelor of Science in Computer Science and Engineering
              </p>
            </div>
          </div>
          <div className="text-xs italic dark:text-gray-400 lg:text-right mt-1.5">
            2022–Present
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="w-full mb-8">
        <h2 className="text-xl font-bold dark:text-gray-300 border-b dark:border-gray-700 pb-1 mb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="flex flex-wrap gap-2 w-full">
          {skills.map((skill, idx) => (
            <h3
              key={idx}
              className="font-semibold bg-black text-white dark:bg-gray-200 dark:text-black px-2 rounded text-xs/5"
            >
              {skill}
            </h3>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
