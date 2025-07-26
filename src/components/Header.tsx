import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-brand-pink border-b border-border py-4 md:py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:flex-row md:items-center md:text-left w-full md:w-auto">
          <img
            src="/favicon.ico"
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20 mb-2 md:mb-0 mx-auto md:mx-0"
          />
          <div className="w-full md:w-auto text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">
              Matruchaya LLP
            </h1>
            <p className="text-base md:text-lg text-muted-foreground italic">
              "Building Trust, Delivering Excellence."
            </p>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-primary text-2xl ml-4"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open navigation"
        >
          &#9776;
        </button>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row space-x-4 items-center">
          <Link to="/" className="text-primary hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-primary hover:underline">
            About Us
          </Link>
          <Link to="/service" className="text-primary hover:underline">
            Our Services
          </Link>
          <Link to="/update" className="text-primary hover:underline">
            Latest Updates
          </Link>
          <Link to="/signin" className="text-primary hover:underline">
            Sign In
          </Link>
        </nav>
      </div>
      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white w-full max-w-xs rounded-lg shadow-lg p-6 flex flex-col space-y-2 animate-slide-down">
            <button
              className="self-end text-2xl text-primary mb-2"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation"
            >
              &times;
            </button>
            <Link
              to="/"
              className="text-primary hover:underline py-2 px-4 rounded text-center"
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-primary hover:underline py-2 px-4 rounded text-center"
              onClick={() => setSidebarOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/service"
              className="text-primary hover:underline py-2 px-4 rounded text-center"
              onClick={() => setSidebarOpen(false)}
            >
              Our Services
            </Link>
            <Link
              to="/update"
              className="text-primary hover:underline py-2 px-4 rounded text-center"
              onClick={() => setSidebarOpen(false)}
            >
              Latest Updates
            </Link>
            <Link
              to="/signin"
              className="text-primary hover:underline py-2 px-4 rounded text-center"
              onClick={() => setSidebarOpen(false)}
            >
              Sign In
            </Link>
          </div>
          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;