import React from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "REST Countries Explorer",
    description: `
1. Built a responsive country explorer web application with dynamic routing and reusable components.

2. Implemented dark/light mode UI using Tailwind CSS custom themes.

3. Added error boundaries, loading spinners, and page fallback handling for better UX.

4. Organized scalable frontend architecture with modular layouts and optimized rendering.
`,
    techStack: ["React.js", "React Router", "JavaScript", "Tailwind CSS"],
    link: "https://rest-countries-xi-ashen.vercel.app/",
  },
  {
    title: "Chemical Today Magazine",
    description:
      `1. Developed a responsive React + TypeScript web application for Chemical Today, featuring dynamic news cards, dashboards,and interactive UI components.` +
      `2. Implemented optimized API integration and data-driven rendering to display real-time chemical industry news, insights, and analytics.Implemented the system to streamline curfew e-pass issuance and management.`+
      `3. Built reusable components (Post Cards, Sections, Layouts) with clean UI/UX, Tailwind CSS, and modular architecture, improving performance and maintainability` ,
    techStack: ["React.tsx", "React.js", "Python","Tailwind CSS", "MongoDB"],
    link: "https://chemical-today-eight.vercel.app/",
  },
    {
    title: "To-Do Full Stack Application",
    description:
      '1. Created an admin dashboard for managing products, users, and sales data.' +
      '2. Focused on real-time analytics and user-friendly visualizations.',
    techStack: ["React", "Node.js", "SQL Server"],
    link: "https://todo-fullstack-amae.vercel.app/Login",
  },
   {
    title: "Todoist [Task & Project Management Web Application]",
    description:
      '1. Built a responsive task and project management application using React.js and Context API.' +
      '2. Integrated API-based project/task handling with loading and error management.'+
      '3. Designed a modern UI with reusable components using Tailwind CSS and Ant Design.' ,
    techStack: ["React.js", "Context API", "Tailwind CSS", "Ant Design"],
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-gray-200">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 max-w-7xl gap-8 ml-auto mr-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {p.description}
              </p>
              <div className="text-sm mb-4 text-gray-600 dark:text-gray-400">
                <strong>Tech Stack:</strong> {p.techStack.join(", ")}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
