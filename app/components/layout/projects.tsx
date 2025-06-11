"use client";
import React from "react";

type Project = {
  title: string;
  description: string;
  url: string;
};

interface ProjectListProps {
  onSelect: (project: Project | null) => void;
}

const ProjectList = ({ onSelect }: ProjectListProps) => {
  const projects = [
    {
      title: "scripture",
      description:
        "Note-taking app with Markdown (live preview) and rich-text (Editor.js) support. Secure JWT auth with hashed passwords.",
      url: "https://github.com/kalvin-chakma/scripture",
    },
    {
      title: "MovieApp",
      description:
        "MovieApp | React, Tailwind CSS, Axios – Fetched and displayed TMDB data with movie details, search, and filters.",
      url: "https://github.com/kalvin-chakma/MovieApp",
    },
    {
      title: "Project-CSE-2200",
      description:
        "A full-stack MERN e-commerce app with JWT authentication and role-based access for Admin/Buyer.",
      url: "https://github.com/kalvin-chakma/Project-CSE-2200",
    },
    {
      title: "Assignment_CSE-2200",
      description:
        "ToDo App using JavaScript, HTML, Bootstrap – CSE 2200 (Software Dev III) Assignment 1.",
      url: "https://github.com/kalvin-chakma/Assignment_CSE-2200",
    },
    {
      title: "Assignment_CSE-2100",
      description: "(CSE 2100) Software Development - II 1st Assignment",
      url: "https://github.com/kalvin-chakma/scripture",
    },
  ];

  return (
    <div className="no-scrollbar mx-auto max-w-5xl rounded-lg p-1 shadow-md relative">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => onSelect(project)}
            className="h-[15vh] rounded-md border border-gray-500/75 p-5 text-center shadow transition-all hover:shadow-md cursor-pointer"
          >
            <a
              href={project.url}
              className="text-md mb-2 block cursor-pointer font-semibold text-gray-100"
            >
              {project.title}
            </a>
            <p className="mb-3 text-xs text-gray-500">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
