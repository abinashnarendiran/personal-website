import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 text-center py-8 text-xs font-mono text-slate-500">
      © {new Date().getFullYear()} Abinash Narendiran. Built with Next.js & Tailwind CSS.
    </footer>
  );
}