/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col" id="footer">
      <footer className="w-full bg-white text-[#D4AF37] py-8 flex-shrink-0 shadow-lg">
        <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:justify-between sm:text-left sm:items-start sm:space-y-0 px-4 sm:px-8">
          {/* Contact Info */}
          <div className="text-center sm:text-left font-bold text-lg sm:text-base space-y-1">
            <p className="transition-colors duration-300">
              Barua pepe:{" "}
              <a
                href="mailto:lughatausi@gmail.com"
                className="hover:text-[#FFD700]"
              >
                lughasauti@gmail.com
              </a>
            </p>
            <p className="transition-colors duration-300">
              Mawasiliano:{" "}
              <a href="tel:+255 653 896 908" className="hover:text-[#FFD700]">
                +255653896908
              </a>
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold mb-2">
              Jisajili kwa jarida letu:
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Ingiza barua pepe yako"
                className="px-3 py-2 rounded border border-[#D4AF37] bg-white text-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-colors duration-300"
              />
              <button
                type="submit"
                className="ml-2 px-5 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-semibold rounded-lg transition-all duration-300 hover:from-[#FFD700] hover:to-[#DAA520] hover:shadow-lg hover:shadow-yellow-500/50 transform hover:scale-105"
              >
                Jisajili
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/lugha_tausi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-75"
            >
              <FaInstagram
                size={26}
                className="text-[#D4AF37] hover:text-[#FFD700] transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/60"
              />
            </a>
            <a
              href="https://github.com/lughatausi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-75"
            >
              <FaGithub
                size={24}
                className="text-[#D4AF37] hover:text-[#FFD700] transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/60"
              />
            </a>
            <a
              href="https://chat.whatsapp.com/C9S38bs1UI0JIpXcX4tfQK"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:opacity-75"
            >
              <FaWhatsapp
                size={28}
                className="text-[#D4AF37] hover:text-[#FFD700] transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/60"
              />
            </a>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-center text-xs mt-8 font-extrabold transition-colors duration-300 hover:text-[#FFD700] cursor-default">
          "Kuimarisha kizazi cha vijana, Kuwezesha mustakabali wa taifa letu"
        </div>

        {/* Copyright */}
        <div className="text-center text-xs mt-1 transition-colors duration-300 hover:text-[#FFD700] cursor-default">
          &copy; {new Date().getFullYear()} Lugha Tausi. Haki zote
          zimehifadhiwa.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
