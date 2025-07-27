
const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-corporate-background to-corporate-neutral relative overflow-hidden">
      {/* Decorative SVG icon at the top */}
      <svg className="absolute left-8 top-8 w-24 h-24 opacity-10 pointer-events-none" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="#FFD700" />
        <path d="M32 16L40 32H24L32 16Z" fill="#4CAF50" />
      </svg>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-corporate-primary mb-3 tracking-tight drop-shadow-lg">
            About Matruchaya Consultancy LLP
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-corporate-foreground leading-relaxed mb-6">
              At Matruchaya Consultancy LLP, we believe that everyone deserves access to the best financial solutions 
              tailored to their unique dreams and aspirations. With years of experience in the financial services 
              industry, we have built a reputation based on trust, transparency, and personalized service.
            </p>
            <p className="text-lg text-corporate-foreground leading-relaxed mb-6">
              Our team of dedicated professionals works tirelessly to understand your financial goals and 
              provide you with the most suitable loan options available in the market. We pride ourselves 
              on our quick processing times, competitive rates, and exceptional customer service.
            </p>
            <p className="text-lg text-corporate-foreground leading-relaxed">
              Whether you're looking to buy your dream home, expand your business, or meet any other financial 
              need, Matruchaya Consultancy LLP is here to guide you every step of the way. Your dreams are our mission.
            </p>
          </div>
          <div className="border-t-4 border-corporate-accent2 mt-8 pt-4"></div>
        </div>
      </div>
    </section>
  );
};

export default About;