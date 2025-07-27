import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className=" text-white py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">

        {/* Name */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#8245ec]">Mohit Sharma</h2>

        {/* Page Links */}
        <div className="flex justify-center gap-6 flex-wrap text-gray-400 text-sm sm:text-base">
          <a href="#About" className="hover:text-[#8245ec] transition">About</a>
          <a href="#Skills" className="hover:text-[#8245ec] transition">Skills</a>
          <a href="#Projects" className="hover:text-[#8245ec] transition">Projects</a>
          <a href="#Education" className="hover:text-[#8245ec] transition">Education</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mt-2">
          <a href="https://github.com/mohit98k" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] transition">
            <FaGithub />
          </a>
          <a href="https://instagram.com/mohit_98k" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] transition">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/mohit-sharma-a1276a326/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec] transition">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Mohit Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
