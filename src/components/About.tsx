const About = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Matruchaya Consultancy
          </h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Matruchaya Consultancy, we believe that everyone deserves access to the best financial solutions 
              tailored to their unique dreams and aspirations. With years of experience in the financial services 
              industry, we have built a reputation based on trust, transparency, and personalized service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our team of dedicated professionals works tirelessly to understand your financial goals and 
              provide you with the most suitable loan options available in the market. We pride ourselves 
              on our quick processing times, competitive rates, and exceptional customer service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're looking to buy your dream home, expand your business, or meet any other financial 
              need, Matruchaya Consultancy is here to guide you every step of the way. Your dreams are our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;