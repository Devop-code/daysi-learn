"use client"
import React from "react";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About us", href: "#about" },
    { label: "Services", href: "#service" },
    { label: "Projects", href: "#projet" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-5">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform transition-transform hover:scale-110">
            <span className="text-white font-bold text-sm md:text-lg">DL</span>
          </div>
          <button className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
            Dev Labs
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-all duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <button className="px-6 py-2 rounded-lg border border-gray-200 text-gray-700 font-medium text-sm transition-all duration-300 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50">
            Login
          </button>
          <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 transform hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          <svg
            className={`w-6 h-6 text-gray-700 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-gray-100 transition-all duration-500 ease-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="px-4 py-4 space-y-2">
          <ul className="space-y-0">
            {menuItems.map((item, index) => (
              <li
                key={item.href}
                className={`transition-all duration-500 ease-out ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium text-sm hover:text-amber-600 hover:bg-amber-50 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Buttons */}
          <div className="flex gap-3 pt-4 mt-4 border-t border-gray-100">
            <button className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-gray-700 font-medium text-sm transition-all duration-300 hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50">
              Login
            </button>
            <button className="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
