import React from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 transition-colors duration-500"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
          Get in Touch
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a question, a project, or just want to say hello? I’d love to
          hear from you — let’s build something amazing together.
        </p>

        {/* Contact Cards */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* GitHub */}
          <div className="w-72 bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <Github className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
              GitHub
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              github.com/Poorna-Teja
            </p>
          </div>

          {/* LinkedIn */}
          <div className="w-72 bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <Linkedin className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
              LinkedIn
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              linkedin.com/in/poorna-teja
            </p>
          </div>

          {/* Email */}
          <div className="w-72 bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
            <Mail className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
              Email
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              princepoorna05@gmail.com
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center mt-12 text-gray-800 dark:text-gray-200">
          <Phone className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
          <span className="text-lg font-medium">+91 9047143338</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
