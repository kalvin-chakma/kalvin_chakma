"use client";
import Link from "next/link";
import React from "react";
import { FaGithubSquare, FaExternalLinkAlt, FaLink } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  url: string;
  link: string;
  point: string;
  image?: string;
};

interface ProjectListProps {
  onSelect: (project: Project | null) => void;
}

const ProjectList = ({ onSelect }: ProjectListProps) => {
  const projects: Project[] = [
    {
      title: "Scripture",
      description:
        "Note-taking app with Markdown (live preview) and rich-text (Editor.js) support. Secure JWT auth with hashed passwords.",
      url: "https://github.com/kalvin-chakma/scripture",
      link: "https://scripture-esqx.vercel.app/",
      image: "/scripture-home.png",
      point: `• Built a responsive note-taking app using React and Tailwind CSS.
• Implemented JWT-based authentication with hashed passwords for enhanced security.
• Supported both Markdown (with live preview) and rich-text notes using Editor.js.`,
    },
    {
      title: "MovieApp",
      description:
        "React app styled with Tailwind CSS. Uses TMDB API to display movies with search and filters.",
      url: "https://github.com/kalvin-chakma/MovieApp",
      link: "https://movie-app-six-vert.vercel.app/",
      image: "/movieApp-home.png",
      point: `• Integrated TMDB API using Axios to dynamically fetch and display movie data.
• Built features like movie detail view, search, and filter functionality for improved UX.`,
    },
    {
      title: "EDokan E-Commerce",
      description:
        "Full-stack MERN e-commerce app with JWT auth and Admin/Buyer roles.",
      url: "https://github.com/kalvin-chakma/Project-CSE-2200",
      link: "https://project-cse-2200-ui.vercel.app/",
      image: "/eDokan-home.png",
      point: `• Built a full-stack MERN e-commerce application with RESTful APIs.
• Implemented JWT authentication with access/refresh tokens and role-based access for Admin and Buyer.
• Integrated GitHub visualization to display team collaboration.
• Deployed the frontend using Vercel for scalable hosting.`,
    },
    {
      title: "To-Do App",
      description:
        "ToDo App using JavaScript, HTML, Bootstrap – CSE 2200 Assignment.",
      url: "https://github.com/kalvin-chakma/Assignment_CSE-2200",
      link: "https://assignment-cse-2200.vercel.app/",
      image: "/todo-home.png",
      point: `• Developed a simple ToDo list using vanilla JavaScript and Bootstrap.
• Enabled adding, deleting, and marking tasks as complete.
• Used localStorage for persistent task storage.`,
    },
  ];

  return (
    <div className="relative flex min-h-screen bg-white text-black dark:bg-[#08090a] dark:text-white">
      <div className="no-scrollbar p-2">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => onSelect(project)}
              className=" h-[46vh] cursor-pointer rounded-md border border-gray-500/35 text-center shadow transition-all hover:shadow-md hover:scale-[1.02]"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="mx-auto h-[19vh] w-full object-fit rounded-t-md"
                />
              )}
              <div className="p-2">
                {" "}
                <p className="h-[2vh] text-md mb-3 block font-semibold text-black dark:text-gray-100 tracking-tight ">
                  {project.title}
                </p>
                <p className="h-[6vh] overflow-hidden mb-1 text-xs text-gray-500">
                  {project.description}
                </p>
                <div className="h-[11vh] mb-2.5 text-xs/3.5 text-gray-500 text-justify overflow-hidden">
                  {project.point.split("\n").map((point, i) => (
                    <p key={i} className="mb-1">
                      {point}
                    </p>
                  ))}
                </div>
                <div className="flex gap-3 text-[10px]">
                  <Link
                    href={project.url}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="py-0.5 px-2 flex items-center rounded-md bg-black text-white dark:bg-gray-700 dark:text-white/60  font-semibold"
                  >
                    <FaGithubSquare className="h-3 mr-1.5" />
                    GitHub
                  </Link>
                  <Link
                    href={project.link}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="py-0.5 px-2 flex items-center rounded-md bg-black text-white dark:bg-gray-700 dark:text-white/60 font-semibold"
                  >
                    <FaLink className="h-3 mr-1.5" />
                    Preview
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
