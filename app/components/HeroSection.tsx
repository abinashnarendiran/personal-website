"use client";

import React from "react";
import Image from 'next/image';
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
      {/* Tech Geometric Accents */}
      <div className="absolute top-4 left-4 font-mono text-emerald-500/20 text-4xl select-none pointer-events-none">
        {`{ /* code */ }`}
      </div>
      <div className="absolute bottom-10 right-1/2 font-mono text-slate-400/20 dark:text-slate-600/20 text-6xl select-none pointer-events-none">
        +
      </div>

      {/* Left Split: Hero Text */}
      <div className="lg:col-span-7 bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8 lg:p-14 rounded-3xl shadow-2xl relative z-10 border border-slate-200 dark:border-slate-800 transition-colors">
        <span className="inline-block px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-mono mb-4">
          &gt;_ Software Developer
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
          Abinash Narendiran<span className="text-emerald-500">.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl font-light leading-relaxed mb-6">
          I build scalable software solutions, focusing on modern web architectures, performant frontends, and robust backend systems.
        </p>
        
        {/* Hero Actions */}
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            download="Abinash_Narendiran_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-all shadow-lg shadow-emerald-600/20"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium rounded-xl transition-all border border-slate-300 dark:border-slate-700"
          >
            View Active Project
          </a>
        </div>
      </div>

      {/* Right Split: Accent Panel & Profile Photo */}
      <div className="lg:col-span-5 relative bg-emerald-600 dark:bg-emerald-700 p-8 rounded-3xl min-h-105 flex items-center justify-center border border-emerald-500/40 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px] opacity-10 rounded-3xl"></div>

        <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 transform hover:scale-[1.02] transition-transform">
          <Image
            src="/profile.jpeg"
            alt="Abinash Narendiran"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}