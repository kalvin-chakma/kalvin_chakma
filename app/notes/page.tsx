"use client";

import { useState } from "react";
import HeroSection from "../components/sections/heroSection";
import Notes from "../components/ui/notes";
import Link from "next/link";

export default function NotesPage() {
  const [activeTab, setActiveTab] = useState("Notes");
  const tabs = ["Project", "Notes"];

  return (
    <div className="relative flex min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <main className="mx-auto w-full max-w-2xl px-6">
        <div className="flex w-full flex-col items-center justify-center">
          <HeroSection />

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

          {/* Notes Content */}
          <div className="mt-6 w-full p-2">
            <Notes />
          </div>
        </div>
      </main>
    </div>
  );
}
