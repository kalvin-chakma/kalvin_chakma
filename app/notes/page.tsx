"use client";

import { useState } from "react";
import HeroSection from "../components/sections/heroSection";
import Notes from "./notes";
import Link from "next/link";

export default function NotesPage() {
  const [activeTab, setActiveTab] = useState("Notes");
  const tabs = ["Project", "Notes"];

  return (
    <div className="relative flex min-h-screen bg-black">
      <main className="mx-auto w-full max-w-2xl p-6">
        <div className="flex w-full flex-col items-center justify-center">
          <HeroSection />

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

          {/* Notes Content */}
          <div className="mt-6 w-full p-2">
            <Notes />
          </div>
        </div>
      </main>
    </div>
  );
} 