import React from "react";
import { skillCategories } from "../data/skills";

export default function SkillsSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mb-6 flex items-center gap-2">
        <span>02.</span> Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm"
          >
            <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-4 uppercase tracking-wider">
              {cat.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium rounded-lg hover:border-emerald-500 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}