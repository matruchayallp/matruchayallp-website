
const Footer = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-lg shadow-2xl border-t border-corporate-accent2 py-10 mt-20 animate-fade-in">
      {/* Decorative SVG icon */}
      <svg className="absolute left-4 top-4 w-16 h-16 opacity-20 pointer-events-none" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#FFD700" />
        <path d="M32 16L40 32H24L32 16Z" fill="#4CAF50" />
      </svg>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-corporate-primary">Matruchaya Consultancy LLP</h3>
          <p className="text-corporate-foreground/80">Your Trusted Financial Partner</p>
        </div>
        <div className="mb-6 flex justify-center animate-bounce-slow">
          <img src="/favicon.ico" alt="Matruchaya Consultancy LLP Logo" className="w-12 h-12 rounded-lg" />
        </div>
        <p className="text-xl text-corporate-primary mb-3 font-bold">&copy; {new Date().getFullYear()} Matruchaya Consultancy LLP. All rights reserved.</p>
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-corporate-primary hover:text-corporate-accent2 font-semibold text-lg transition-all">Privacy Policy</a>
          <a href="#" className="text-corporate-primary hover:text-corporate-accent2 font-semibold text-lg transition-all">Terms of Service</a>
        </div>
        <div className="flex justify-center">
          <span className="text-corporate-primary font-semibold">Made with <span className="text-corporate-accent2">♥</span> by Divinecodes Technologies Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;