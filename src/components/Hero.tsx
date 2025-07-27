const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-24 flex items-center justify-center min-h-[60vh]">
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Your Trusted Identity & Financial Partner
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Matruchaya Consultancy LLP delivers reliable, efficient, and future-ready business solutions for modern organizations. Minimize risk, maximize potential, and create lasting value with our transparent, data-driven approach.
        </p>
        <a href="/apply" className="corporate-btn text-lg px-8 py-3 shadow-lg">
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Hero;