import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24"
    >
      {/* Decorative background circles for depth */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Floating Hero Card */}
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-2xl rounded-2xl p-10 inline-block transform transition-transform hover:scale-105 duration-500">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white drop-shadow-sm">
            I’m <span className="text-blue-600 dark:text-blue-400">POORNA TEJA P</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
            Full Stack Developer | React • TypeScript • Node.js
          </p>

          {/* Main CTA Button */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </a>

          {/* 3D Social Logos */}
          <div className="mt-8 flex justify-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src="https://www.pngmart.com/files/23/Github-Logo-PNG.png"
                alt="GitHub"
                className="w-12 h-12 rounded-full shadow-lg"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
                alt="LinkedIn"
                className="w-12 h-12 rounded-full shadow-lg"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              title="Email"
              className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src="https://ouch-cdn2.icons8.com/Q_mKQhLvgHc4CpJslA6YAg1orkPp2LG3W6rdaEQZ1oo/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTYv/MzE3NWFhMzAtMmQw/Yi00MDgyLTlhZWMt/ZWUyZGNlYzQwYmM0/LnBuZw.png"
                alt="Email"
                className="w-12 h-12 rounded-full shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
