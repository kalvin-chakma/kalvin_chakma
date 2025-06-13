import Image from "next/image";
import React from "react";

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
  "framer motion"
];



const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto p-2 rounded-lg shadow-md">
      {/* Header */}
      <div className="mb-8 text-center">
        {/* <Image
          src="/kalvin-chakma.jpg"
          alt="Kalvin Chakma"
          width={100}
          height={100}
          className="rounded-full shadow-lg object-cover mx-auto"
        /> */}
        <h1 className="text-3xl font-bold text-gray-100 mt-4">Kalvin Chakma</h1>
        <div className="flex flex-wrap items-center text-xs justify-center gap-2 text-gray-400 mt-2">
          <span>+880 1533-023730</span>
          <span>•</span>
          <span>kalvinchakma7@gmail.com</span>
          <span>•</span>
          <a
            href="https://github.com/kalvin-chakma"
            className="text-blue-500 hover:underline"
          >
            github.com/kalvin-chakma
          </a>
        </div>
      </div>

      {/* Education */}
      <section className="mb-8 w-full">
        <h2 className="text-xl font-bold text-gray-300 border-b border-gray-700 pb-1 mb-2">
          EDUCATION
        </h2>
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h3 className="font-bold text-gray-400">
              Ahsanullah University of Science and Technology
            </h3>
            <div className="text-xs text-gray-400 lg:text-right">
              2022–Present
            </div>
          </div>
          <p className="italic text-gray-400/70 text-xs">
            Bachelor of Science in Computer Science and Engineering
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="w-full mb-8">
        <h2 className="text-xl font-bold text-gray-300 border-b border-gray-700 pb-1 mb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="flex flex-wrap gap-2 w-full">
          {skills.map((skill, idx) => (
            <h3 key={idx} className="font-semibold bg-gray-200 px-2 rounded text-xs/5">
              {skill}
            </h3>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
