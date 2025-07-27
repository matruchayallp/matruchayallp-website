import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Apply Now', href: '/apply' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [showLoginMenu, setShowLoginMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-gradient-to-r from-corporate-primary to-corporate-accent2 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="Matruchaya Consultancy LLP Logo" className="w-16 h-16 md:w-20 md:h-20 rounded-lg shadow-lg" />
            <span className="text-lg md:text-xl font-bold text-white tracking-tight drop-shadow-xl ml-2">Matruchaya Consultancy LLP</span>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className={`flex-col md:flex-row flex md:flex items-center gap-6 md:gap-10 w-full md:w-auto mt-4 md:mt-0 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className="uppercase text-white font-semibold text-base tracking-wide px-2 py-1 transition-all duration-200 hover:text-corporate-accent2 hover:underline underline-offset-4"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative flex items-center ml-0 md:ml-2 mt-2 md:mt-0">
            <button
              className="corporate-btn px-4 py-1.5 font-semibold text-sm shadow-md rounded-lg bg-white/20 text-white hover:bg-corporate-accent2 hover:text-white transition-all"
              onClick={() => setShowLoginMenu(v => !v)}
              onBlur={() => setTimeout(() => setShowLoginMenu(false), 150)}
            >
              Login
            </button>
            {showLoginMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
                <Link
                  to="/admin-login"
                  className="block px-4 py-2 hover:bg-gray-100 text-left w-full"
                  onClick={() => setShowLoginMenu(false)}
                >
                  Admin Login
                </Link>
                <Link
                  to="/user-login"
                  className="block px-4 py-2 hover:bg-gray-100 text-left w-full"
                  onClick={() => setShowLoginMenu(false)}
                >
                  User Login
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}