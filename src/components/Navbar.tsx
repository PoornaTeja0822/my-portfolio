import React, { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle theme handler
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left Section: Photo + Name + Role */}
        <div className="flex items-center space-x-3">
          <img
            src="profile.jpg"
            alt="Poorna Teja"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              POORNA TEJA P
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#hero"
            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
          >
            Contact
          </a>

          {/* Professional Resume Button */}
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
          >
            Resume
          </a>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 animate-slideDown">
          <div className="flex flex-col items-center space-y-4">
            <a
              href="#hero"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-gray-300"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-200 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
            >
              Resume
            </a>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
