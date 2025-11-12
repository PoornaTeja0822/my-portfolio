import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6 text-center text-gray-500">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} POORNA TEJA P. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
