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

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <img src="/favicon.ico" alt="Matruchaya Consultancy LLP Logo" className="w-12 h-12 rounded-lg" />
          <span className="text-xl font-bold tracking-wide text-[var(--primary)]">Matruchaya Consultancy LLP</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[var(--foreground)] font-medium hover:text-[var(--primary)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="relative">
            <button
              className="corporate-btn px-4 py-2"
              onClick={() => setShowLoginMenu(v => !v)}
              onBlur={() => setTimeout(() => setShowLoginMenu(false), 150)}
            >
              Login
            </button>
            {showLoginMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
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