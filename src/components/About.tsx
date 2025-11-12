import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20"
    >
      <div className="container mx-auto px-4">
       {/* About Me */}
<h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
  About Me
</h2>

<div className="flex justify-center">
  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-7xl w-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4 text-center md:text-left">
      <p>
        I’m Poorna Teja P, a passionate Software Developer currently working at Deloai Pvt Ltd. I specialize in building scalable and efficient software solutions using technologies like React.js, .NET, and SQL Server.
      
      
        As a dedicated developer, I enjoy designing clean, maintainable code and solving complex problems through modern technology. My focus is on delivering user-friendly, reliable, and high-quality web applications.
      
      
        I’m always eager to explore new tools and frameworks, improve my skills, and collaborate on projects that make a real impact.
      </p>
    </div>
  </div>
</div>
{/* Education */}
<h2 className="text-3xl font-bold mb-8 mt-10 text-center text-gray-800 dark:text-gray-200">
  Education
</h2>

<div className="flex justify-center">
  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-7xl w-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 text-center md:text-left">
      {/* Degree 1 */}
      <div>
        <h3 className="font-semibold text-xl mb-1">Bachelor of Computer Applications</h3>
        <p className="italic">
          The Oxford College of Science, Bangalore University, Bangalore | 2020 - 2023
        </p>
        <p>Graduated with 7.3 CGPA</p>
        <p>
          Focused on software development, databases, and web technologies. Completed multiple
          projects in React.js, Python, and SQL Server.
        </p>
      </div>

      {/* Degree 2 */}
      <div>
        <h3 className="font-semibold text-xl mb-1">Senior Secondary Education</h3>
        <p className="italic">Narayana Junior College | 2018 - 2020</p>
        <p>Completed with 8.8 CGPA</p>
        <p>Specialized in Biology, Physics, and Chemistry.</p>
      </div>
    </div>
  </div>
</div>

{/* Technical Skills */}
<h2 className="text-3xl font-bold mb-8 mt-10 text-center text-gray-800 dark:text-gray-200">
  Technical Skills
</h2>

<div className="flex justify-center">
  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-7xl w-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
         {/* Frontend */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Frontend</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {["React", "TypeScript",  "HTML5", "CSS3", "JavaScript", "Tailwind CSS"].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Database Management */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Database Management</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {["SQL Server", "Oracle SQL", "MongoDB"].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
       {/* Backend */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Backend</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {[ "Python", "Flask", ].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Tools & Platforms</h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {["Visual Studio 2022", "VS Code", "SQL Server", "Git", "GitHub", "Postman"].map(skill => (
            <span
              key={skill}
              className="px-3 py-1 border rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

{/* Certifications */}
<h2 className="text-3xl font-bold mb-8 mt-10 text-center text-gray-800 dark:text-gray-200">
  Certifications
</h2>

<div className="flex justify-center">
  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-7xl w-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-3 text-center md:text-left">
      <li>Full Stack Web Development - Tap Academy</li>
      <li>Python Programming</li>
      <li>React.js & React.tsx, Tailwind CSS</li>
      <li>SQL Server Database Fundamentals</li>
    </ul>
  </div>
</div>

      {/* Experience */}
<h2 className="text-3xl font-bold mb-8 mt-10 text-center text-gray-800 dark:text-gray-200">
  Experience
</h2>

<div className="flex justify-center">
  <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-7xl w-full transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
    <div className="text-lg text-gray-700 dark:text-gray-300 space-y-6 text-center md:text-left">

      {/* Job 1 */}
      <div>
        <h3 className="font-semibold text-xl mb-1">Software Developer | Deloai Pvt Ltd</h3>
        <p className="italic mb-2">August 2025 - Present</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Developed and maintained web applications using React.tsx, Python, and MongoDB Server.</li>
          <li>Collaborated with cross-functional teams to design scalable solutions.</li>
          <li>Improved application performance and code maintainability.</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div>
        <h3 className="font-semibold text-xl mb-1">Front End Developer Intern | Pradee Queen Groups</h3>
        <p className="italic mb-2">November 2024 - July 2025</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Assisted in developing front-end components with React.js.</li>
          <li>Performed database management and optimization tasks.</li>
          <li>Participated in code reviews and team meetings.</li>
        </ul>
      </div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
