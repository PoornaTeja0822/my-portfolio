import React from "react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "Developed a responsive personal portfolio using React, TypeScript, and Tailwind CSS. Showcases my projects, skills, and certifications with smooth UI transitions and dark mode support.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Employee Management System",
    description:
      "Built a full-stack web app to manage employee data using Flask and MongoDB. Implemented CRUD operations, search filters, and RESTful APIs for smooth performance.",
    techStack: ["Python", "Flask", "MongoDB"],
    link: "#",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Created an admin dashboard for managing products, users, and sales data. Focused on real-time analytics and user-friendly visualizations.",
    techStack: ["React", "Node.js", "SQL Server"],
    link: "#",
  },
  {
    title: "Customer Feedback Analysis",
    description:
      "Designed a data analytics system to analyze customer reviews using Python and visualization libraries. Helped in improving business decisions through insights.",
    techStack: ["Python", "Pandas", "Matplotlib"],
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
