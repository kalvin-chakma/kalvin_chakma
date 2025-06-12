import Image from "next/image";
import React from "react";

const skills = [
  { title: "Languages", details: "C/C++, SQL (Postgres, Prisma), JavaScript" },
  {
    title: "Frameworks",
    details: "React, Next.js, Node.js, Express, CSS (Tailwind)",
  },
  {
    title: "Dev Tools",
    details: "Git, GitHub, Postman, MongoDB, PostgreSQL, Vercel, Docker",
  },
  {
    title: "Libraries",
    details: "Redux/Zustand, React Router, Aceternity UI, Material UI",
  },
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
        <div className="text-sm">
          {skills.map((skill) => (
            <div className="flex" key={skill.title}>
              <h3 className="font-semibold text-gray-400 min-w-[100px]">
                {skill.title}:
              </h3>
              <p className="text-gray-400/70">{skill.details}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
