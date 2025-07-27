
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-corporate-primary to-corporate-accent2 text-corporate-foreground py-24 flex items-center justify-center min-h-[60vh] overflow-hidden">
      {/* Decorative SVG background */}
      <svg className="absolute left-0 top-0 w-1/2 h-full opacity-20 pointer-events-none" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="300" cy="300" r="300" fill="#FFD700" />
      </svg>
      <svg className="absolute right-0 bottom-0 w-1/3 h-1/3 opacity-30 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="200" height="200" rx="100" fill="#4CAF50" />
      </svg>
      <div className="container mx-auto px-4 text-center flex flex-col items-center relative z-10">
        {/* Decorative Icon */}
        <div className="mb-6">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="32" fill="#1B3A64" />
            <path d="M32 16L40 32H24L32 16Z" fill="#FFD700" />
            <path d="M32 48C38.6274 48 44 42.6274 44 36H20C20 42.6274 25.3726 48 32 48Z" fill="#4CAF50" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Your Trusted Identity & Financial Partner
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Matruchaya Consultancy LLP delivers reliable, efficient, and future-ready business solutions for modern organizations. Minimize risk, maximize potential, and create lasting value with our transparent, data-driven approach.
        </p>
        <a href="/apply" className="bg-corporate-accent text-corporate-primary font-bold text-lg px-8 py-3 rounded-full shadow-lg hover:bg-corporate-accent2 transition-all duration-200">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Hero;