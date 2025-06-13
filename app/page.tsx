"use client";

import { useState } from "react";
import ProjectList from "./components/layout/projects";
import HeroSection from "./components/sections/heroSection";
import Link from "next/link";
import useOutsideClick from "./hooks/useOutsideClick";

type Project = {
  title: string;
  description: string;
  url: string;
  point: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Project");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const tabs = ["Project", "Notes"];
  const ref = useOutsideClick(() => setSelectedProject(null));

  return (
    <div className="relative flex min-h-screen bg-black">
      {selectedProject && (
        <div className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-xs"></div>
      )}

      <main className="mx-auto w-full max-w-2xl p-6">
        <div className="flex w-full flex-col items-center justify-center">
          <HeroSection />

          {selectedProject && (
            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50">
              <div
                ref={ref}
                className="m-auto h-[30vh] w-[80vh] rounded-md border border-gray-500/75 bg-black p-5 text-center shadow transition-all hover:shadow-md"
              >
                <Link
                  href={selectedProject.url}
                  className="text-md mb-2 block cursor-pointer font-semibold text-gray-100"
                >
                  {selectedProject.title}
                </Link>
                <p className="mb-3 text-xs text-gray-500">
                  {selectedProject.description}
                </p>
                <p className="text-center text-sm text-gray-400 whitespace-pre-line">
                  {selectedProject.point}
                </p>
              </div>
            </div>
          )}

          {/* Navbar Tabs */}
          <div className="flex w-full justify-center space-x-8">
            {tabs.map((tab, idx) => (
              <Link
                key={idx}
                href={tab === "Project" ? "/" : "/notes"}
                className={`cursor-pointer border-b-2 pb-2 text-sm transition-all duration-200 ${
                  activeTab === tab
                    ? "border-green-700 font-semibold text-green-700"
                    : "border-transparent text-gray-300 hover:border-gray-300"
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
      </main>
    </div>
  );
}
