"use client";

import { useState } from "react";
import ProjectList from "./components/ui/projects";
import HeroSection from "./components/sections/heroSection";
import Link from "next/link";
import useOutsideClick from "./hooks/useOutsideClick";
import { FaGithubSquare, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

type Project = {
  image?: string;
  title: string;
  description: string;
  url: string;
  link: string;
  point: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Project");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const tabs = ["Project", "Notes"];
  const ref = useOutsideClick(() => setSelectedProject(null));

  return (
    <div className="relative flex min-h-screen bg-white text-black dark:bg-black dark:text-white ">
      {selectedProject && (
        <div className="fixed inset-0 z-10 h-full w-full dark:bg-black/50 backdrop-blur-xs"></div>
      )}

      <main>
        <div className="flex w-full flex-col items-center justify-center px-6">
          <HeroSection />

          {selectedProject && (
            <div
              className="fixed inset-0 z-20 flex items-center justify-center dark:bg-black/50 motion-preset-pop motion-duration-2000
"
            >
              <div
                ref={ref}
                className="m-auto h-[70vh] w-[55vh] rounded-md  bg-white dark:bg-black  text-center shadow transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {selectedProject.image && (
                    <img
                      src={selectedProject.image}
                      alt={`${selectedProject.title} screenshot`}
                      className="mx-auto h-[35vh] w-full object-fit rounded-t-md mb-2"
                    />
                  )}
                  <p className="text-xl mb-2 font-semibold text-black dark:text-gray-100">
                    {selectedProject.title}
                  </p>
                  <p className="mb-3 text-xs text-gray-500">
                    {selectedProject.description}
                  </p>
                  <p className="text-sm text-gray-400 whitespace-pre-line">
                    {selectedProject.point}
                  </p>
                </div>

                <div className="flex gap-3 justify-center mt-4 p-5 text-[10px]">
                  <Link
                    href={selectedProject.url}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="py-1 px-2 flex items-center rounded-md bg-black text-white dark:bg-gray-700 dark:text-white/60  font-semibold"
                  >
                    <FaGithubSquare className="h-3 mr-1.5" />
                    GitHub
                  </Link>
                  <Link
                    href={selectedProject.link}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="py-1 px-2 flex items-center rounded-md bg-black text-white dark:bg-gray-700 dark:text-white/60  font-semibold"
                  >
                    <FaExternalLinkAlt className="h-3 mr-1.5" />
                    Browser
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Navbar Tabs */}
          <div className="flex w-full justify-center space-x-8 font-semibold">
            {tabs.map((tab, idx) => (
              <Link
                key={idx}
                href={tab === "Project" ? "/" : "/notes"}
                className={`cursor-pointer border-b-2 pb-2 text-sm transition-all duration-200 ${
                  activeTab === tab
                    ? "border-green-700 font-semibold text-green-700"
                    : "border-transparent text-black hover:border-black/50 dark:text-gray-300 dark:hover:border-gray-300"
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-6 w-full">
            <ProjectList onSelect={setSelectedProject} />
          </div>
        </div>
        <div className="h-[10vh] flex items-center justify-center px-10 text-center"></div>
      </main>
    </div>
  );
}
