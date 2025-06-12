"use client";
import React from "react";

type Project = {
  title: string;
  description: string;
  url: string;
  point: string;
};

interface ProjectListProps {
  onSelect: (project: Project | null) => void;
}

const ProjectList = ({ onSelect }: ProjectListProps) => {
  const projects: Project[] = [
    {
      title: "scripture",
      description:
        "Note-taking app with Markdown (live preview) and rich-text (Editor.js) support. Secure JWT auth with hashed passwords.",
      url: "https://github.com/kalvin-chakma/scripture",
      point: `• Built a responsive note-taking app using React and Tailwind CSS.
• Implemented JWT-based authentication with hashed passwords for enhanced security.
• Supported both Markdown (with live preview) and rich-text notes using Editor.js.`,
      // ✔ Corrected wording and punctuation for clarity and professionalism
    },
    {
      title: "MovieApp",
      description:
        "React app styled with Tailwind CSS. Uses TMDB API to display movies with search and filters.",
      url: "https://github.com/kalvin-chakma/MovieApp",
      point: `• Integrated TMDB API using Axios to dynamically fetch and display movie data.
• Built features like movie detail view, search, and filter functionality for improved UX.`,
      // ✔ Grammar corrected; shortened and refined the second point
    },
    {
      title: "Project-CSE-2200",
      description:
        "Full-stack MERN e-commerce app with JWT auth and Admin/Buyer roles.",
      url: "https://github.com/kalvin-chakma/Project-CSE-2200",
      point: `• Built a full-stack MERN e-commerce application with RESTful APIs.
• Implemented JWT authentication with access/refresh tokens and role-based access for Admin and Buyer.
• Integrated GitHub visualization to display team collaboration.
• Deployed the frontend using Vercel for scalable hosting.`,
      // ✔ More formal sentence structure and improved wording consistency
    },
    {
      title: "Assignment_CSE-2200",
      description:
        "ToDo App using JavaScript, HTML, Bootstrap – CSE 2200 Assignment.",
      url: "https://github.com/kalvin-chakma/Assignment_CSE-2200",
      point: `• Developed a simple ToDo list using vanilla JavaScript and Bootstrap.
• Enabled adding, deleting, and marking tasks as complete.
• Used localStorage for persistent task storage.`,
      // ✔ Improved clarity and corrected tense consistency
    },
    {
      title: "Assignment_CSE-2100",
      description: "CSE 2100 Software Development II - Assignment 1",
      url: "https://github.com/kalvin-chakma/scripture",
      point: `• Built a basic project using HTML, CSS, and JavaScript.
• Practiced core software development principles and submission workflows.`,
      // ✔ Reworded for smoother flow
    },
  ];

  return (
    <div className="no-scrollbar relative mx-auto max-w-5xl rounded-lg p-1 shadow-md">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => onSelect(project)}
            className="h-[15vh] cursor-pointer rounded-md border border-gray-500/75 p-5 text-center shadow transition-all hover:shadow-md"
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
