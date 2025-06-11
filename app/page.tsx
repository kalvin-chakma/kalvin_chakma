"use client";

import { useState } from "react";
import ProjectList from "./components/layout/projects";
import HeroSection from "./components/sections/heroSection";
import Educations from "./components/sections/educations";
import Experience from "./components/sections/experience";
import Notes from "./components/sections/notes";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  url: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("Project");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const tabs = ["Project", "Education", "Experience", "Notes"];

  return (
    <div className="flex min-h-screen bg-black relative">
      <main className="w-full max-w-3xl p-6 mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <HeroSection />
          
          {selectedProject && (
            <div className="fixed inset-0 bg-black/50 z-20 flex items-center justify-center">
              <div className="h-[60vh] w-[80vh] rounded-md border border-gray-500/75 p-5 text-center shadow transition-all hover:shadow-md m-auto bg-black">
                <Link
                  href={selectedProject.url}
                  className="text-md mb-2 block cursor-pointer font-semibold text-gray-100"
                >
                  {selectedProject.title}
                </Link>
                <p className="mb-3 text-xs text-gray-500">{selectedProject.description}</p>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Navbar Tabs */}
          <div className="w-full mt-6 flex justify-center space-x-8">
            {tabs.map((tab, idx) => (
              <span
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 cursor-pointer transition-all duration-200 border-b-2 text-sm ${
                  activeTab === tab
                    ? "border-green-700 text-green-700 font-semibold"
                    : "border-transparent text-gray-300 hover:border-gray-300"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full mt-6">
            {activeTab === "Project" && <ProjectList onSelect={setSelectedProject} />}
            {activeTab === "Education" && <Educations />}
            {activeTab === "Experience" && <Experience />}
            {activeTab === "Notes" && <Notes />}
          </div>
        </div>
      </main>
    </div>
  );
}