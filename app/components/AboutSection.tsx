import React from "react";
import { aboutMe } from "../data/aboutMe";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2">
        <span>01.</span> About Me
      </h2>
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
          {aboutMe.paragraph}
        </p>
      </div>
    </section>
  );
}