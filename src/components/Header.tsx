import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-brand-pink border-b border-border py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Matruchaya LLP
          </h1>
          <p className="text-lg text-muted-foreground italic">
            "Building Trust, Delivering Excellence."
          </p>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-primary hover:underline">Home</Link>
          <Link to="/about" className="text-primary hover:underline">About Us</Link>
          <Link to="/service" className="text-primary hover:underline">Our Services</Link>
          <Link to="/update" className="text-primary hover:underline">Latest Updates</Link>
          <Link to="/signin" className="text-primary hover:underline">Sign In</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;