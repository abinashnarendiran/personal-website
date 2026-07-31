import React from "react";
import { currentProject } from "../data/project";
import GithubIcon from "./icons/GithubIcon";

export default function FeaturedProject() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
        <span>03.</span> Featured Project
      </h2>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-lg relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 rounded-full text-xs font-mono mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          {currentProject.status}
        </div>

        <h3 className="text-2xl font-bold mb-3">{currentProject.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl leading-relaxed">
          {currentProject.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {currentProject.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={currentProject.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <GithubIcon className="w-4 h-4" />
            View Repository on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}