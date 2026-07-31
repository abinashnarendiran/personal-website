"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, FileText } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <header className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
      <div className="font-mono text-xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
        &lt;Abinash /&gt;
      </div>

      <div className="flex items-center gap-3">
        {/* Quick Header Resume Button */}
        <a
          href="/resume.pdf"
          download="Abinash_Narendiran_Resume.pdf"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all text-xs font-mono font-medium"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </a>

        {/* Dark/Light Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-emerald-500 transition-all text-sm font-mono flex items-center gap-2"
          aria-label="Toggle Dark Mode"
        >
          {mounted && (
            theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-700" />
                <span>Dark</span>
              </>
            )
          )}
        </button>
      </div>
    </header>
  );
}